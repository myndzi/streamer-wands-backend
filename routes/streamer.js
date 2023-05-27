const express = require("express")
const router = express.Router()
const apiController = require("../controllers/streamerController")
const { catchErrors } = require("../handlers/errorHandlers")
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()

router.get("/:name", catchErrors(apiController.getWands))

module.exports = router