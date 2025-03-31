const mongoose = require('mongoose')
const apothSchema = new mongoose.Schema({
    shifts: [[String]],
    shiftsTotal: Number,
    shiftsTimer: Number,
})

module.exports = mongoose.model('Apotheosis Info', apothSchema)
