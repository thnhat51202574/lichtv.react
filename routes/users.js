var express = require('express');
var router = express.Router();

const util = require('util');

function requireAuthentication(req, res, next) {
    res._data_user = { name: "Lich Truong", id: 1 };
    console.log("requireAuthentication");
    return next();
}

function loadUser(req, res, next) {
    res._data_user.login = "lichcse";
    console.log("loadUser");
    return next();
}

/* GET users listing. */
router.get('/', requireAuthentication, loadUser, function(req, res, next) {
    console.log("User page");
    console.log(res._data_user);
    res.send('respond with a resource');
});

router.get('/lichtv', function(req, res, next) {
    console.log("LichTV");
    res.send('respond with a resource');
});

module.exports = router;