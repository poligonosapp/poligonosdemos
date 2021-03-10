var express = require('express');
var app = express();
let cors = require('cors');
var router = express.Router();

app.use(cors());
app.use(logger('dev'));

/* GET admins listing. */
router.get('/admins', function (req, res, next) {
    res.send('loading admins ...');
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})

module.exports = router;
