const express = require('express');
const fs = require('fs')
const path = require('path')
const debug = require('debug') ('demo_server')

const app = express();
const PORT = 3000;

app.use(express.static("."))

app.listen(PORT, (err) => {   
    if(err) {
    debug(`error!!!!!!!:${err}`)
        throw new Error(err)
    }
    debug(`listening at localhost:${PORT}`)
})