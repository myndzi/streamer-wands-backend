const URL = require("url")
const path = require("path")
const http = require('http')
const WebSocket = require('ws')
const ticketHandler = require("./handlers/ticketHandler")
const wsController = require("./controllers/wsController")
const WebSocketServer = new WebSocket.Server({ noServer: true })
function noop() { }
WebSocketServer.on("connection", (ws, req, user) => {
    console.log(`Connected [${JSON.stringify(user)}]`)
    ws.isAlive = true
    if (typeof user == "object") {
        ws.on("message", (d) => {
            ws.isAlive = true
            wsController.message(d, user, WebSocketServer)
        })
    }
    else {
        ws.streamer = user
        ws.send("sup nerd")
        ws.on("pong", () => {
            ws.isAlive = true
        })
    }
})

const interval = setInterval(() => {
    WebSocketServer.clients.forEach((ws) => {
        if (ws.isAlive === false) {
            console.log("byebye")
            return ws.terminate()
        }

        ws.isAlive = false;
        ws.ping(noop)
    })
}, 30000)

WebSocketServer.on('close', () => {
    clearInterval(interval);
});

module.exports = (server) => {
    server.on('upgrade', (req, socket, head) => {
        try {
            const url = URL.parse(req.url)
            const token = decodeURIComponent(path.basename(url.path))
            console.log(token)
            if (token.startsWith("client")) {
                const streamer = token.split("=")[1]
                return WebSocketServer.handleUpgrade(req, socket, head, ws => {
                    WebSocketServer.emit('connection', ws, req, streamer)
                })
            }
            const user = ticketHandler.verify(token)
            if (!user) {
                socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
                socket.destroy()
                return
            }

            return WebSocketServer.handleUpgrade(req, socket, head, ws => {
                WebSocketServer.emit('connection', ws, req, user)
            })
        } catch (err) {
            console.log(err)
        }
    })
}