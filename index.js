'use strict'

const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('port', 3000)
const port = app.get('port');

app.use(express.static(path.join(__dirname, 'client')));

io.on('connection', function(socket) {
    console.log("user connected");
    
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});


http.listen(app.get('port'), () => {
    console.log(`listening on port: ${port}`);
});