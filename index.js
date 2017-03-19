'use strict'

const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);

app.set('port', 3000)
const port = app.get('port');

app.use(express.static(path.join(__dirname, 'client')));

http.listen(app.get('port'), () => {
    console.log(`listening on port: ${port}`);
});