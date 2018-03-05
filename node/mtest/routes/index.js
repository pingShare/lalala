var express = require('express');
var router = express.Router();
//专门写路由，方法去controller里找
var User = require('../controller/user.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login',User.login);
router.post('/checklogin',User.checklogin);
module.exports = router;

