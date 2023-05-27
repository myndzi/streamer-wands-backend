const jwt = require("jsonwebtoken")

exports.isValidTicket = (ticket) => {
    jwt.verify(ticket, process.env.JWT_SECRET, (err) => {
        if (err) {
            return false
        }
        else {
            return true
        }
    })
}

exports.verify = (ticket) => {
    try {
        const user = jwt.verify(ticket, process.env.JWT_SECRET)
        return user
    } catch (err) {
        console.log(err)
        return false
    }
}

exports.generateTicket = (user) => {
    const ticket = jwt.sign({
        id: user.id,
        display_name: user.display_name
    }, process.env.JWT_SECRET)
    return ticket
}

exports.generateRefreshTicket = (user) => {
    const refreshTicket = jwt.sign({
        id: user.id,
        display_name: user.display_name
    }, process.env.JWT_REFRESH_SECRET)

    return refreshTicket
}

exports.refreshTicket = (ticket) => {
    try {
        const verified = jwt.verify(ticket, process.env.JWT_REFRESH_SECRET)
        if (!verified) {
            throw new Error("Failed to verify jwt refresh token.")
        }

        const newTicket = this.generateTicket(verified)
        return newTicket
    } catch (err) {
        console.log(err)
    }
}