import router from './poligonos'
import { response } from 'express'

let express = require('express')
let cors = require('cors')
const logger = require('morgan')
const app = express()

app.route('/poligonos')
    .get(function (req, res) {
        app.use(logger('get rota mapas...'))
        res.send('Get map')
        res.status(200)
    })

module.exports = response
export default response
