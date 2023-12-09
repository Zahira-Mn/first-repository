const http = require('http');


const server = http.createServer((req, res) => {
    // res.end is the simple way to sending bag simple response
    res.end("Hello from the Server")
})

// server.listen(port, localhost)
server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to requests on port 8000")
})