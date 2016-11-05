var express = require('express');
var router = express.Router();

router.get('/api/ping', function(req, res, next) {
  res.send({success : true , msg : "pong"});
});

module.exports = router;
