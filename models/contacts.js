var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  userId:String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contacts', ContactSchema);
