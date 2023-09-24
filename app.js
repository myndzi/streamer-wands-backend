const { statSync } = require('node:fs')
const path = require('node:path')

const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const passport = require('passport')

const streamerRoutes = require('./routes/streamer')
const authRoutes = require('./routes/auth')
const indexRoutes = require('./routes/index')
const errorHandlers = require('./handlers/errorHandlers')
require('./handlers/passportHandler')

const app = express()

// app.use((req, res, next) => {
//     console.log(
//         `${req.headers['x-real-ip'] ?? req.ip} ${req.method} ${req.path}`,
//     )
//     next()
// })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// // uncomment this if not running behind a reverse proxy such as nginx
// app.use(express.static('public', { dotfiles: 'allow' }))
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        key: process.env.SESSION_KEY,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            client: mongoose.connection.getClient(),
        }),
        httpOnly: true,
        secure: true,
    }),
)

app.use(passport.initialize())
app.use(passport.session())

const mtime = {
    styleCss: statSync(__dirname, 'public', 'style.css').mtime.getTime(),
    spellData: statSync(__dirname, 'public', 'spellData.js').mtime.getTime(),
    wandSprites: statSync(
        __dirname,
        'public',
        'wandSprites.js',
    ).mtime.getTime(),
}
app.locals = {
    domain: process.env.DOMAIN,
    title: 'Streamer Wands',
    mtime,
}

// Main Routes
app.use('/streamer', streamerRoutes)
app.use('/auth', authRoutes)
app.use('/', indexRoutes)

if (true || process.env.NODE_ENV === 'development') {
    app.use(errorHandlers.devError) // Stack trace
} else {
    app.use(errorHandlers.productionError) // Whoopsies something went wrong
}

// Error Handling
app.use(errorHandlers.notFound) // 404

module.exports = app
