var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Home page");
    res.render('index', { title: 'React', text: "This is example home page" });
});

module.exports = router;