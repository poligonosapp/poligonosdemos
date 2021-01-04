var express = require('express');
var router = express.Router();

/* GET admins listing. */
router.get('/', function(req, res, next) {
  res.send('loading admins ...');
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

module.exports = router;
