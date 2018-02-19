const express = require('express')
const router = express.Router()
const contactmodel = require('./contactmodel')
const sql = require('mysql2')
const connection = require('./config')(sql)


// Get Methods


// Post Methods
// Register
router.post('/student/register', (req, res) => {
    connection.query('select * from user', (err, users) => {
        let uid = 'U' + (users.length);
        connection.query('select * from usertype where Type = ?', req.body.user, (err, type) => {
            let userdata = {
                UID: uid,
                UserName: req.body.info.username,
                TypeId: type[0].TypeId
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
                            obj['UID'] = uid;
                            connection.query('INSERT INTO usercontact set ?', [obj]);
                        }
                    }
                }
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'lyncschoolindia@gmail.com',
                        pass: 'lyncschool123'
                    }
                });
                let text = 'Hello from the other side.';
                let token = randtoken.generate(10);
                let mailOptions = {
                    from: 'lyncschoolindia@gmail.com',
                    to: req.body.info.email,
                    subject: 'Test test',
                    text: "http://localhost:9000/#!/activation/" + token
                }
                transporter.sendMail(mailOptions, function(err, info) {
                    if (err) {
                        res.send("Mail Error")
                    } else {
                        let logindata = {
                            IsActive: false,
                            UID: uid,
                            AcToken: token
                        }
                        connection.query('INSERT INTO login set ?', logindata, (err) => {
                            if (err) {
                                res.send("Cannot Update AcToken to Login");
                            }
                        })
                    }
                })
                console.log("Success");
                res.send("Successful")
            })
        })
    })
})
