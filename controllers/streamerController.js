const mongoose = require('mongoose')
const Streamers = mongoose.model('Streamers')

exports.getWands = async (req, res, next) => {
    const { name } = req.params
    const streamer = await Streamers.findOne({ name }).collation({
        locale: 'en_US',
        strength: 1,
    })
    if (streamer) {
        const stuff = {
            menu: false,
            title: `${streamer.name} wands`,
            streamer: streamer.name,
            wands: streamer.wands,
            inventory: streamer.inventory || [],
        }
        res.render('wands', stuff)
    } else {
        next()
    }
}
