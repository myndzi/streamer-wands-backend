const mongoose = require("mongoose")
const Streamers = mongoose.model("Streamers")
/* obsolete
const spellData = require("../utils/spellData")
const wandSprites = require("../utils/wandSprites")

function usedWands(wands) {
    const sprites = {}
    wands.forEach(wand => {
        const sprite = wand.stats.sprite
        sprites[sprite] = wandSprites[sprite]
    })
    return sprites
}

function usedSpells(wands) {
    const spells = {}
    wands.forEach(wand => {
        for (const spell of wand.always_cast) {
            if (!spells[spell])
                spells[spell] = spellData[spell]
        }
        for (const spell of wand.deck) {
            if (!spells[spell])
                spells[spell] = spellData[spell]
        }
    })
    return spells
}
*/
exports.getWands = async (req, res) => {
    const { name } = req.params
    const streamer = await Streamers.findOne({ name }).collation({ locale: 'en_US', strength: 1 })
    if (streamer) {
        const stuff = {
            title: `${streamer.name} wands`,
            streamer: streamer.name,
            wands: streamer.wands,
            inventory: streamer.inventory || []
        }
        res.render("wands", stuff)
    }
    else {
        const err = new Error("Streamer not found")
        err.status = 404
        throw err
    }
}