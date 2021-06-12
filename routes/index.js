var express = require('express');
const fs = require('fs');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from(fs.readFileSync(path.join(__dirname, '../docs/index.html'))));
});

module.exports = router;
