var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home page', active: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('about_me', { title: 'about me', active: 'about' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'projects', active: 'projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services', active: 'services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact_me', { title: 'contact me', active: 'contact' });
});

module.exports = router;
