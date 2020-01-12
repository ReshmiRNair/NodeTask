var mongoose = require("mongoose");
var Contacts = require("../models/contacts");
var contactController = {};

// Show list of Contacts
contactController.list = function(req, res) {
  Contacts.find({userId:req.decoded.id}).exec(function (err, contacts) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.json(contacts)
    }
  });
};

// Show contacts by id
contactController.show = function(req, res) {
  Contacts.findOne({_id:req.body.id}).exec(function (err, contacts) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.json(contacts)
    }
  });
};


// Save new contact
contactController.save = function(req, res) {
  req.body.userId=req.decoded.id
  var contact = new Contacts(req.body);
  contact.save(function(err,contact) {
    if(err) {
      console.log(err);
    } else {
      console.log("Successfully created an contacts.");
       res.json(contact)
    }
  });
};

// Update a contact
contactController.update = function(req, res) {
  Contacts.findByIdAndUpdate(req.body.id, { $set: { name: req.body.name, phone: req.body.phone }}, function (err, contacts) {
    if (err) {
      console.log(err);
    }
    res.json(contacts)
  });
};

// Delete a contact
contactController.delete = function(req, res) {
  Contacts.remove({_id: req.body.id}, function(err,contacts) {
    if(err) {
      console.log(err);
    }
    else {
      res.json(contacts)
      console.log("Contacts deleted!");
    }
  });
};

module.exports = contactController;
