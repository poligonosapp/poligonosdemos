const axios = require('axios').default;

// import React from 'react'
import router from './poligonos'
// import { response } from 'express'

let cors = require('cors')
const logger = require('morgan');

let express = require('express')
const app = express();

app.route('/poligonos')
    .get(function (req, res) {
        app.use(logger('get route poligonos...'))
        res.send('Get polygon')
        res.status(200)
    })

response.set(router.set(app));

// module.exports = response
export default response;
