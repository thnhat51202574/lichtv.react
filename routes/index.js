var express = require('express');
var router = express.Router();

var Test = require('G:/LichTV/NodeJS/Project/lichtv.react/classes/test.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("rootPathApp: ", rootPathApp);
    Test.hello();
    res.render('index', { title: 'React Tutorial' });
});

module.exports = router;