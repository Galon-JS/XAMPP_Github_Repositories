const http = require('http')

const port = 3000
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Haloo World</h1>')

})

server.listen(port, hostname, () => {
    console.info(`Server running at ${hostname}:${port}`);
})