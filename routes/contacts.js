var express = require('express');
var contact = require("../controllers/contactController.js");
var config = require('../configurations/config')
var app = express();
const jwt = require('jsonwebtoken')


app.set('Secret', config.secret);

const  ProtectedRoutes = express.Router(); 
ProtectedRoutes.use((req, res, next) =>{

     
    // check header or url parameters or post parameters for token
    var token = req.headers['access-token'];
  console.log(token)
    // decode token
    if (token) {
  
      // verifies secret and checks exp
      jwt.verify(token, app.get('Secret'), (err, decoded) =>{      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;    
          next();
        }
      });
  
    } else {
  
      // if there is no token
      // return an error
      return res.status(403).send({ 
     
          message: 'No token provided.' 
      });
  
    }
  });

// Get all contacts
ProtectedRoutes.get('/list', function(req, res) {
  contact.list(req, res);
});

// Get single contact by id
ProtectedRoutes.post('/show', function(req, res) {
  contact.show(req, res);
});


// Save contact
ProtectedRoutes.post('/save', function(req, res) {
  contact.save(req, res);
});


// Edit update
ProtectedRoutes.post('/update', function(req, res) {
  contact.update(req, res);
});

// Delete Contact
ProtectedRoutes.post('/delete', function(req, res, next) {
  contact.delete(req, res);
});

module.exports = ProtectedRoutes;
