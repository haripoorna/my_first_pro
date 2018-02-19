const express = require('express')
const morgan = require('morgan')
const ejs = require('ejs')
const app = express()
//const session = require('express-session')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const genroutes = require('./genRoutes')
//const session = require('client-sessions')
const passport = require('passport')
const bodyParser = require('body-parser')

//const cors = require('cors');
// express-session
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }))

// //Cleint Session
// app.use(session({
// 	cookieName: 'session',
// 	secret: 'amsbefkkqu3rhiql74u2tri73yuro8q24iygrhiu;y3rjoil',
// 	duration: 30*60*1000,
// 	activeDuration: 5*60*1000,
// 	httpOnly: true,
// 	secure: true,
// 	ephemeral: true,
// }));

//app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())
//app.use(cors());
//Interceptor
var unless = function(path, middleware) {
    return function(req, res, next) {
        for (let i = 0; i < path.length; i++) {
            if (path[i] == req.path) {
                return next()
            } else {
                // console.log(req.path === path[i])
                // console.log(path)
                // console.log(req.path)
                return middleware(req, res, next);
            }
        }
        return middleware(req, res, next)
    }
}
// app.use(unless(['/test', '/login', '/register'], passport.authenticate('token')));
// app.use(unless('/register', passport.authenticate('token')));
// app.use(unless('/example_route', passport.authenticate('token')));
// app.use('/', passport.authenticate('token'));

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('upload '))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/', routes)
app.use('/routes', genroutes)
module.exports = app;
