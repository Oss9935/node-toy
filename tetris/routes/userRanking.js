var express = require('express');
var router = express.Router();

/* GET ranking page. */
router.get('/', function(req, res, next) {
  res.render('ranking', { title: 'Express' });
});

module.exports = router;
