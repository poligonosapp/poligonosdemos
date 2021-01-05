import router from './mapas'
import { response } from 'express'

let express = require('express')
let cors = require('cors')
const logger = require('morgan')
const app = express()

app.route('/mapas')
    .get(function (req, res) {
        app.use(logger('get rota mapas...'))
        res.send('Get map')
        res.status(200)
    })
    .post(function (req, res) {
        res.send('Add a map')
    })
    .put(function (req, res) {
        res.send('Update the map')
    })

module.exports = response
export default response
