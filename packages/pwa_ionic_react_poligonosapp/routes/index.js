var express = require('express')
var app = express()
var router = express.Router()

var helmet = require('helmet');
app.use(helmet());
app.disable('x-powered-by');

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('PoligonosApp Express+React+Ionic loading...')
    res.render('index', { title: 'PoligonosApp loading...' })
})

module.exports = router
