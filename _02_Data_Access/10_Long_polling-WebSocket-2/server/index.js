const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', ws => {
    console.log('New Client connected !!!');

    wss.on('close', () => {
        console.log('Client has disconnected !!!');
        
    })
})