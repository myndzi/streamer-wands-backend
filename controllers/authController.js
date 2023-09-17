const mongoose = require('mongoose')
const Tokens = mongoose.model('Tokens')
const ticketHandlers = require('../handlers/ticketHandler')
const singleUse = []
exports.isValid = (req, res, next) => {
    return next()
    const { token } = req.params
    if (!token) {
        const err = new Error('Bad single use token')
        err.status = 403

        next(err)
    }
    const tokenIndex = singleUse.indexOf(token)
    if (tokenIndex > -1) {
        singleUse.splice(tokenIndex, 1)
        next()
    }
}

exports.isLoggedIn = (req, res, next) => {
    if (req.user) {
        next()
    } else {
        res.redirect('/auth/login')
    }
}

exports.logOut = async (req, res, next) => {
    if (!req.user) {
        res.redirect('/')
        return
    }

    const deleted = await Tokens.findOneAndDelete({ id: req.user.id })
    if (!deleted) {
        const err = new Error('Failed to delete refresh token.')
        throw err
    }

    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        res.redirect('/')
    })
}

exports.getTicket = async (req, res) => {
    if (!req.user) {
        const err = new Error('User not logged in.')
        err.status = 403
        throw err
    }
    const query = await Tokens.findOne({ id: req.user.id })
    const { displayName } = req.user
    const ticket = query.token
    res.json({
        instructions:
            'replace the ticket in your mod token.lua file, without removing the quotation marks',
        token: ticket,
    })
}
