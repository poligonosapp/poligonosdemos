const axios = require('axios').default;

// import React from 'react'
import router from './poligonos'
// import { response } from 'express'

let cors = require('cors')
const logger = require('morgan');

let express = require('express')
const app = express();

let axiosResponse;

app.route('/poligonos')
    .get(async function (req, res) {
        app.use(logger('get route poligonos...'))
        res.send('Get polygon')
        res.status(200)

        try {
            axiosResponse = await axios("https://www.poligonosapp.herokuapp.com/api/v1/poligonos");
            return axiosResponse;
        }
        catch (e) {
            alert('request failed');
        }
    })

// response.set(router.set(app));

// module.exports = response
// export default response;

export default axiosResponse;
