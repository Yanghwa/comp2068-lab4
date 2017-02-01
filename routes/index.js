var express = require('express');
var router = express.Router();


router.get('/junghwan', function(req, res, next) {
  res.render('junghwan', { title: 'Junghwan Yang - Me', content: 'Hey Hey Hey' });
});
router.get('/sunok', function(req, res, next) {
  res.render('sunok', { title: 'Sunok Kang - Mother', content: 'Hey Hey Hey' });
});
router.get('/younggyu', function(req, res, next) {
  res.render('younggyu', { title: 'Younggyu Yang - Father', content: 'Hey Hey Hey' });
});
router.get('/heena', function(req, res, next) {
  res.render('heena', { title: 'Heena Yang - Sister', content: 'Hey Hey Hey' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main Page - Nothing', content: 'Hey Hey Hey' });
});

module.exports = router;
