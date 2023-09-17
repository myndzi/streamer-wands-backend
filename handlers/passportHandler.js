const passport = require('passport')
const twitchStrategy = require('passport-twitch-strategy').Strategy
const mongoose = require('mongoose')
const Streamer = mongoose.model('Streamers')
const Tokens = mongoose.model('Tokens')
const ticketHandlers = require('../handlers/ticketHandler')
passport.use(
    new twitchStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL,
            scope: 'user_read',
        },
        async function (accessToken, refreshToken, user, done) {
            try {
                console.log({ id: user.id })
                const dbUser = await Streamer.findOneAndUpdate(
                    { id: user.id },
                    { id: user.id, name: user.displayName },
                    {
                        useFindAndModify: false,
                        new: true,
                        upsert: true,
                        setDefaultsOnInsert: true,
                    },
                )
                const token = ticketHandlers.generateTicket(user)
                const refresh = await Tokens.findOneAndUpdate(
                    { id: user.id },
                    { id: user.id, token },
                    {
                        useFindAndModify: false,
                        new: true,
                        upsert: true,
                        setDefaultsOnInsert: true,
                    },
                )
                done(null, user)
            } catch (err) {
                console.error(`Something went very wrong. ${err}`)
            }
        },
    ),
)

passport.serializeUser(function (user, done) {
    done(null, { id: user.id, displayName: user.displayName })
})

passport.deserializeUser(async function (user, done) {
    try {
        const dbUser = await Streamer.findOne({ id: user.id })
        if (!dbUser) {
            //throw new Error("User not found.")
        }
        done(null, user)
    } catch (err) {
        console.error(`Something went very wrong. ${err}`)
        done(err)
    }
})
