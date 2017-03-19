'use strict'

const express = require('express');
const app = express();
const http = require('http').Server(app);

app.set('port', 3000)
const port = app.get('port');

app.get('/', (req, res) => {
    res.send("Hi there");
});

http.listen(app.get('port'), () => {
    console.log(`listening on port: ${port}`);
});