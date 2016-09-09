var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var test = {

  };
  test.text = '123';
  test.url = 'http://www.baidu.com';
  res.send(test);
});

module.exports = router;