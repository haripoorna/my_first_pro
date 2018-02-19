const express = require('express')
const router = express.Router()
//const session = require('express-session')
//const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const sql = require('mysql2')
const connection = require('./config')(sql)
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const TokenStrategy = require('passport-token-auth').Strategy
const nodemailer = require('nodemailer')
const randtoken = require('rand-token')
const saltRounds = 10
const contactmodel = require('./contactmodel')

router.get('/', function(req, res) {
    res.send('Josu is Alive !!!!')
})


//Middleware for whitelist
function auth(req, res, next) {
if(req.headers.authtoken == (undefined || null)) {
  res.send("Go back and login")
} else {
  connection.query('SELECT * FROM userauth WHERE authToken = ?', req.headers.authtoken, (err, doc) => {
        if(err) {
            res.send('Q error')
        }
        if(doc.length == 0) {
          res.send('Go back and login')
        } else {
          //if(doc.date+1800000<Date.now())
            next()
        }
    })
  }
}

var unless = function(path, middleware) {
    return function(req, res, next) {
        for(i = 0; i < path.length; i++) {
            if (path[i] === req.path) {
                return next()
            }
        }
        return middleware(req, res, next)
    }
}

router.use(unless(['/home','/setPassword', '/forgotPassword', '/checkuser', '/checkemail', '/resetPassword','/login', '/register', '/routes/image', '/routes/upload', '/routes/branch', '/routes/transferpipelinejobs','/routes/regcoll','/routes/pipelinejobs'], auth))


// Login Get Method
router.post('/login', function(req, res) {
    let logindets = req.body.userName
    let password = req.body.password
    connection.query('select * from user inner join login on user.uId = login.uId inner join usercontact on usercontact.uId = user.uId and (user.userName = ? or usercontact.ContactInfo = ?) where usercontact.CtypeId = "CT4"', [logindets, logindets], (err, user) => {
       if (user[0] == null) {
            res.send({"type":"error","message":"Invalid Credentials..!"})
        } else if (user) {
            let json = JSON.parse(JSON.stringify(user))
            connection.query('select * from login where uId = ? ', [user[0].uId], (err, login) => {
                let loginjson = JSON.parse(JSON.stringify(login))
                if (!loginjson[0].isActive) {
                    res.send({"type":"error","message":"Your account needs activation"})
                } else {
                    bcrypt.compare(password, loginjson[0].password, function(err, ency) {
                        if (ency == true) {
                            let userauthtable = {
                                date : Date.now(),
                                uId: loginjson[0].uId,
                                authToken: randtoken.generate(20)
                            }
                            connection.query("INSERT INTO userauth set ? ", userauthtable, (err, insert) => {
                                if (err) res.send("Insert Err")
                                let query = 'select * from user inner join userauth on user.uId = userauth.uId where user.uId = ?';
                                connection.query(query, [userauthtable.uId], (err, details) => {
                                    let detailsjson = JSON.parse(JSON.stringify(details))
                                    detailsjson.sort((a,b) => {
                                        if(parseInt(a.date) > parseInt(b.date)) {
                                          return -1
                                        } else {
                                          return 1
                                        }
                                    })
                                    let us = detailsjson[0];
                                    if (us.typeId == 'UT1') {
                                        us.state = 'student'
                                    } else if (us.typeId == 'UT2') {
                                        us.state = 'college'
                                    } else if (us.typeId == 'UT3') {
                                        us.state = 'employer'
                                    } else if (us.typeId == 'UT4'){
                                      us.state = 'admin'
                                    }
                                  res.send({"type":"success","message":us})
                                })

                            })
                        } else {
                            res.send({"type":"error","message":"Invalid Credentials..!"})
                        }
                    })
                }
            })
        }
    })
})

//Register Post Method
router.post('/setPassword', (req, res) => {
    let password = req.body.password;
    let token = req.body.token;
    if (password == null || token == null || token == undefined) {
        res.send({"type":"error","message":"Null Values not accepted"})
    } else {
        connection.query("select isActive from login where acToken = ?", token, (err, active) => {
            if (active.length == 0) res.send({"type":"error","message":"Sorry, Invalid URL..!"})
            else if (active[0].isActive == 1) res.send({"type":"error","message":"Account Already Activated"})
            else if (active[0].isActive == 0) {
                bcrypt.hash(password, saltRounds, function(err, hash) {
                    connection.query("UPDATE login set Password = ? , isActive = true where acToken = ? ", [hash, token], (err) => {
                        res.send({"type":"success","message":"Account Activated"})
                    })
                })
            }
        })
    }
})

// Register
router.post('/register', (req, res) => {
    connection.query('select * from user', (err, users) => {
        let len = users.length
        let uid
        if(len > 0) {
            uid = 'U' + (parseInt((users[len-1].uId.split('U'))[1]) + 1)
        } else {
            uid = 'U0'
        }
        connection.query('select * from user where userName = ?', req.body.info.userName, (err, userName) => {
            if (userName[0] == null) {
                connection.query('select * from usertype where Type = ?', req.body.user, (err, type) => {
                    let userdata = {
                        uId: uid,
                        userName: req.body.info.userName,
                        typeId: type[0].typeId
                    }
                    connection.query('INSERT INTO user set ?', [userdata], (err) => {
                        let regO = req.body.info;
                        for (prop in regO) {
                            let obj = {};
                            let x = regO[prop];
                            for (proper in contactmodel) {
                                if (proper == prop) {
                                    let y = contactmodel[proper];
                                    obj['CtypeId'] = y;
                                    obj['ContactInfo'] = x;
                                    obj['uId'] = uid;
                                    connection.query('INSERT INTO usercontact set ?', [obj]);
                                }
                            }
                        }
                        let transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: 'lync.josu@gmail.com',
                                pass: 'lyncjosu'
                            }
                        });
                        let token = randtoken.generate(10);
                        let mailOptions = {
                            from: 'lync.josu@gmail.com',
                            to: req.body.info.primaryEmail,
                            subject: 'Josu activation for username ' + req.body.info.userName,
                            text: "http://localhost:9000/#!/setPassword/" + token
                        }
                        transporter.sendMail(mailOptions, (err, info) => {
                            if (err) {
                                res.send(err + ": Mail error")
                            } else {
                                let logindata = {
                                  date : Date.now(),
                                    isActive: false,
                                    uId: uid,
                                    acToken: token
                                }
                                connection.query('INSERT INTO login set ?', logindata, (err) => {
                                    if (err) {
                                        res.send({"type":"error","message":"Cannot Update acToken to Login"});
                                    }
                                })
                            }
                        })
                        res.send({"type":"success","message":"Registered successfully, please check your mail for activation link and set password ..!"})
                    })
                })
            } else res.send({"type":"error","message":"Username Already Exists"})
        })
    })
})

// Username check
router.post('/checkuser', (req, res) => {
    connection.query('select * from user where userName = ?', req.body.check, (err, username) => {
        if (err) res.send("Connection Error")
        else if (username.length == 0) {
            res.send({"type":"success","message":"Username Available"})
        } else {
            res.send({"type":"userName","message":"Username Already Taken"})
        }
    })
})

//Email check
router.post('/checkemail', (req, res) => {
    connection.query('select * from usercontact where ContactInfo = ? and cTypeId = "CT4"', req.body.check, (err, email) => {
        if (err) res.send('Connection Error')
        else if (email.length == 0) {
            res.send({"type":"success","message":"Good to go!"})
        } else {
            res.send({"type":"email","message":"Email Id Already Exits"})
        }
    })
})

//forgot password
router.post('/forgotPassword', (req, res) => {
    connection.query('SELECT * FROM user inner join usercontact on user.uId = usercontact.uId WHERE usercontact.contactinfo = ? and usercontact.cTypeId = "CT4"', req.body.email, (err, doc) => {
        if(err) {
            res.send({"type":"error","message":"Query error"})
        } else if(doc.length == 0) {
            res.send({"type":"error","message":"No user registered with entered email"})
        } else {
            let uid = doc[0].uId
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'lync.josu@gmail.com',
                    pass: 'lyncjosu'
                }
            })
            let token = randtoken.generate(10);
            let mailOptions = {
                from: 'lync.josu@gmail.com',
                to: req.body.email,
                subject: 'Josu reset password for ' + doc[0].userName,
                text: "http://localhost:9000/#!/resetPassword/" + token
            }
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    res.send({"type":"error","message":"Mail error"})
                } else {
                    let logindata = {
                        acToken: token
                    }
                    connection.query('UPDATE login SET ? WHERE uId = ?', [logindata, uid], (err) => {
                        if (err) {
                            res.send({"type":"error","message":"error"});
                        } else {
                            res.send({"type":"success","message":"Check your email to reset your password"})
                        }
                    })
                }
            })
        }
    })
})

//reset password
router.post('/resetPassword', (req, res) => {
    connection.query('SELECT uId FROM login WHERE acToken = ?', req.body.token, (err, logindata) => {
        if(err) {
            res.send("Q error")
        } else if(logindata.length == 0) {
            res.send({"type":"error","message":"Invalid"})
        } else {
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                connection.query("UPDATE login set Password = ? where acToken = ? ", [hash, req.body.token], (err) => {
                    res.send({"type":"success","message":"Your password has been successfully reset."})
                })
            })
        }
    })
})

//Logout
router.get('/logout', (req, res) => {
  connection.query('delete from userauth where authToken=?',req.headers.authtoken, (err, result)=>{
    if(err) console.log("logout error");
    if(result) console.log("Logout"); res.send("Logout Successfull");
  })
})

// function auth(req, res, next) {
//     let token = req.query.token;
//     connection.query("select user.userName, userauth.authToken from user inner join userauth on user.uId = userauth.uId where userauth.authToken = ? ", [token], (err, token) => {
//         if (err) {
//             res.send(err)
//         } else if (token[0] == null) {
//             res.send("Authentication Failed")
//         } else {
//             next()
//         }
//     })
// }

// //Passport token
// passport.use(new TokenStrategy(
//     (token, done) => {
//         connection.query("select user.userName, userauth.authToken from user inner join userauth on user.uId = userauth.uId where userauth.authToken = ? ", token, (err, auth) => {
//             if (err) {
//                 return done(err)
//             } else if (auth[0] == null) {
//                 return done(null, false)
//             }
//             return done(null, auth)
//         })
//     }
// ))

// // Passport serializeUser
// passport.serializeUser(function(user, done) {
//     done(null, user)
// })

// //Passport deserializeUser
// passport.deserializeUser(function(user, done) {
//     done(null, user)
// })

router.get('/test', (req, res) => {
    connection.query(' select * from user inner join usercontact on user.uId = usercontact.uId inner join login on login.uId = user.uId ', (err, result) => {
        if (err) {
            res.send(" Query Error")
        } else if (result[0] == null) {
            res.send("No User")
        } else {
            var datata = JSON.parse(JSON.stringify(result[0]));
            res.send(datata)
        }
    })
})


module.exports = router;
