const mongoose = require('mongoose')
const Streamer = mongoose.model('Streamers')
const wandsHandler = require('../handlers/wandHandler')
exports.message = async (data, user, server) => {
    try {
        const json = JSON.parse(data)

        const { wands, inventory, items, progress, version, info } = wandsHandler.validate(json)
        server.clients.forEach((ws) => {
            if (ws.streamer == user.displayName) {
                ws.send(
                    JSON.stringify({
                        type: 'wands',
                        wands,
                        inventory: inventory || [],
                        items: items || [],
                        progress,
                        version,
                        info,
                    }),
                )
            }
        })
        const id = user.id
        await Streamer.findOneAndUpdate(
            { id },
            { wands, inventory: inventory || [], items: items || [], progress, version, info },
            {
                useFindAndModify: false,
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            },
        )
    } catch (err) {
        if (data != 'im alive') {
            console.log(err)
        }
    }
}
