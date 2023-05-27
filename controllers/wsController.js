const mongoose = require('mongoose')
const Streamer = mongoose.model('Streamers')
const wandsHandler = require('../handlers/wandHandler')
exports.message = async (data, user, server) => {
    try {
        const json = JSON.parse(data)

        const { wands, inventory } = wandsHandler.validate(json)
        server.clients.forEach((ws) => {
            if (ws.streamer == user.display_name) {
                ws.send(
                    JSON.stringify({
                        type: 'wands',
                        wands,
                        inventory: inventory || [],
                    })
                )
            }
        })
        const id = user.id
        await Streamer.findOneAndUpdate(
            { id },
            { wands, inventory: inventory || [] },
            {
                useFindAndModify: false,
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            }
        )
    } catch (err) {
        if (data != 'im alive') {
            console.log(err)
        }
    }
}
