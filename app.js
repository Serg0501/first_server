const express = require('express');
const router = require('./router.js');
const cors = require('cors');

const {STATIC_PATH}  = require('./constants.js');

const app = express();

let corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));
app.use(express.static(STATIC_PATH));
app.use(express.json());
app.use('/api', router);

module.exports = app;