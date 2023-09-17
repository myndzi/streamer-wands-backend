const express = require('express')
const router = express.Router()
const apiController = require('../controllers/streamerController')
const { catchErrors } = require('../handlers/errorHandlers')

router.get('/:name', catchErrors(apiController.getWands), (req, res) => {
    res.render('nostreamer', {
        name: req.params.name,
    })
})

module.exports = router
