const express = require('express')
const router = express.Router()
const passport = require('passport')
const authController = require('../controllers/authController')
const bodyParser = require('body-parser')
const { catchErrors } = require('../handlers/errorHandlers')
const jsonParser = bodyParser.json()

router.get(
    '/twitch/callback',
    passport.authenticate('twitch', {
        successRedirect: '/auth/ticket',
        failureRedirect: '/login',
    })
)

router.get(
    '/login/:token',
    authController.isValid,
    passport.authenticate('twitch')
)

router.get('/logout', catchErrors(authController.logOut))

router.get(
    '/ticket',
    authController.isLoggedIn,
    catchErrors(authController.getTicket)
)

module.exports = router
