const http = require('http');
const url = require('url')


const server = http.createServer((req, res) => {
    const pathName = req.url

    if( pathName === "/home" || pathName === "/") {
        
        // res.end is the simple way to sending bag simple response
        res.end("Hello from the Server")
    }
    else if( pathName === "/product") {
        res.end("Hello in the product page")
    } else {
        // we can add this header to get the status of the response and to tell the browser to show our html
        // we must define header before sending the response
        res.writeHead(404, {
            "Content-type": 'text/html'
        })
        res.end('<h1 style="color:blue"}>Page Not Found</h1>')
    }
    
})

// server.listen(port, localhost)
server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to requests on port 8000")
})