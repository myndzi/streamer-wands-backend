const express = require('express')
const router = express.Router()
const passport = require('passport')
const authController = require('../controllers/authController')
const { catchErrors } = require('../handlers/errorHandlers')

router.get(
    '/twitch/callback',
    passport.authenticate('twitch', {
        successRedirect: '/',
        failureRedirect: '/login',
    }),
)

router.get(
    '/login/:token',
    authController.isValid,
    passport.authenticate('twitch'),
)

router.get('/logout', catchErrors(authController.logOut))

router.get(
    '/ticket',
    authController.isLoggedIn,
    catchErrors(authController.getTicket),
)

module.exports = router
