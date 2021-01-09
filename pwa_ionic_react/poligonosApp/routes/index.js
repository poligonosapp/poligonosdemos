var express = require('express')
var app = express()
var router = express.Router()

var helmet = require('helmet');
app.use(helmet());
app.disable('x-powered-by');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express+React+Ionic' })
})

module.exports = router
