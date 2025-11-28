var express = require('express');
var router = express.Router();

const results = ['大吉', '中吉', '小吉', '吉', '凶'];

router.get('/', function(req, res) {
  const fortune = results[Math.floor(Math.random() * results.length)];

  res.render('index', {
    title: 'おみくじアプリ',
    fortune: fortune
  });
});

module.exports = router;