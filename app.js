const path = require('path')
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const streamerRoutes = require('./routes/streamer')
const authRoutes = require('./routes/auth')
const errorHandlers = require('./handlers/errorHandlers')
require('./handlers/passportHandler')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static('public', { dotfiles: 'allow' }))
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        key: process.env.SESSION_KEY,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
        httpOnly: true,
        secure: true,
    })
)

app.use(passport.initialize())
app.use(passport.session())
//onlywands redirect || still needed ??
app.use('/', (req, res, next) => {
    if (!req.secure) {
        res.redirect(301, 'https://onlywands.com' + req.url)
    } else if (req.hostname !== 'onlywands.com') {
        res.redirect(301, 'https://onlywands.com' + req.url)
    } else {
        next()
    }
})
// Main Routes
app.use('/streamer', streamerRoutes)
app.use('/auth', authRoutes)

// Error Handling
app.use('/', errorHandlers.notFound) // 404

if (process.env.NODE_ENV === 'development') {
    app.use('/', errorHandlers.devError) // Stack trace
}

app.use('/', errorHandlers.productionError) // Whoopsies something went wrong

module.exports = app
