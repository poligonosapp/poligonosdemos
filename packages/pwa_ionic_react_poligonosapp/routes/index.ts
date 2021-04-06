//TODO LOCALSTORAGE REACTJS

let express = require('express');
let app = express();
let router = express.Router();

// let admin = require('./admin');
let poligonos = require('./poligonos');
// let response = require('routes/response.tsx');//route

let helmet = require('helmet');
app.use(helmet());
app.disable('x-powered-by');

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('PoligonosApp Express+React+Ionic loading...');
    res.render('index', { title: 'PoligonosApp loading...' });
})

module.exports = router;
