var express = require('express')
let cors = require('cors')
var router = express.Router()

app.use(cors())
app.use(logger('dev'))

/* GET admins listing. */
router.get('/', function (req, res, next) {
    res.send('loading admins ...')
    res.sendFile(path.join(__dirname, './public', 'index.html'))
})

module.exports = router
