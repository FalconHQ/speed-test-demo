const express = require('express');
const https = require('https');
const fs = require('fs')
const path = require('path')
const debug = require('debug') ('demo_server')

const app = express();
const PORT = 3000;

app.use(express.static("."))

https.createServer({
    key: fs.readFileSync('./certs/server.key'),
    cert: fs.readFileSync('./certs/cert.crt')
}, app)
.listen(PORT, (err) => {   
    if(err) {
    debug(`error!!!!!!!:${err}`)
        throw new Error(err)
    }
    debug(`listening at localhost:${PORT}`)
})