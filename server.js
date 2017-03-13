'use strict'

const http = require('http');

http
    .createServer((req, res) => {
        res.writeHead(200, {"Content-type": "text/html"})
        res.end('<h1>Hi there!</h1>')
    })
    .listen(4000, () => {
        console.log(`listening on port: 4000`);
    });