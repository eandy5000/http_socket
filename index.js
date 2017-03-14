'use strict'

const express = require('express');
const app = express();
const http = require('http').Server(app);

app.get('/', (req, res) => {
    res.send("Hi there");
});

http.listen(3000, () => {
    console.log(`listening on port: 3000`);
});