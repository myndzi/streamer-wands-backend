const mongoose = require('mongoose')
const fs = require('fs')
const server = require('http').createServer()
/*
const https = require("https")
const credentials = {
    key: fs.readFileSync("/privkey.pem", "utf-8"),
    cert: fs.readFileSync("/cert.pem", "utf-8"),
    ca: fs.readFileSync("/chain.pem", "utf-8")
}
const secureServer = https.createServer(credentials)
*/
// .env variables
require('dotenv').config()

// Database connection and errors...
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', (err) => {
    console.error(`Something went wrong: ${err}`)
})
db.once('open', () => {
    console.log('[DB] Connected.')
})

// Models
require('./models/wandModel')
require('./models/tokenModel')
require('./models/streamerModel')

// Express server
const app = require('./app')
const wss = require('./wss')(server)
//const wsss = require("./wss")(secureServer)
server.on('request', app)
//secureServer.on("request", app)
server.listen(process.env.PORT, () => {
    console.log('[APP] Running port', process.env.PORT)
})
/*
secureServer.listen(443, () => {
    console.log("[APP] Running port 443.")
})
*/
console.log('streamer wands', process.env.NODE_ENV, process.env.BACKEND || 'backend not set!')
