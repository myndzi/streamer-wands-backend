const mongoose = require("mongoose")

const tokenSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    token: String,
})

module.exports = mongoose.model("Tokens", tokenSchema)