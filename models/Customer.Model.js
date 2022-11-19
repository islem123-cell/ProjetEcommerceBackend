const mongoose = require("mongoose");
const User = require("./User");
const schemaCustomer = new mongoose.Schema({
  localisation: {
    type: String,
  },
});

module.exports = mongoose.model('Customer', userSchema);