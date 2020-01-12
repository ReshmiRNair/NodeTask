var express = require('express');
var router = express.Router();
var register = require("../controllers/registerController.js");


// Register User
router.post('/register', function(req, res) {
  register.create(req, res);
});

// Login User
router.post('/login', function(req, res) {
  register.show(req, res);
});

module.exports = router;
