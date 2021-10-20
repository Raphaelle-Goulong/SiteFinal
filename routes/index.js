var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('accueil', );
});

router.get('/accueil', function(req, res, next) {
  res.render('accueil', );
});

router.get('/samAmuse', function(req, res, next) {
  res.render('samAmuse', );
});

router.get('/samHabille', function(req, res, next) {
  res.render('samHabille', );
});

router.get('/samLocale', function(req, res, next) {
  res.render('samLocale', );
});

router.get('/samChausse', function(req, res, next) {
  res.render('samChausse', );
});

router.get('/article', function(req, res, next) {
  res.render('article', );
});
router.get('/inscription', function(req, res, next) {
  res.render('inscription', );
});

module.exports = router;
