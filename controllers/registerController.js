var mongoose = require("mongoose");
var User = require("../models/User");
const jwt = require('jsonwebtoken')
var config = require('../configurations/config')
var registerController = {};


// Show employee by id
registerController.show = function (req, res) {
  var secretss = config.secret
  User.findOne({ email: req.body.email, password: req.body.password }).exec(function (err, user) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      console.log(user,'user')
      const payload = { id:user._id };
      //const options = { expiresIn: '2d' };
      const secret =secretss;
      const token = jwt.sign(payload,secret)
      res.json({user:user,token:token})
    }
  });
};


// Save new employee
registerController.create = function (req, res) {
  var Users = new User(req.body);
  Users.save(function (err, user) {
    if (err) {
      console.log(err);
    } else {
      res.json(user)
      console.log("Successfully created an User.");
    }
  });
};


module.exports = registerController;
