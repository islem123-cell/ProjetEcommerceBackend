const mongoose = require("mongoose");
const schemaCustomer = new mongoose.Schema({
  localisation: {
    type: String,
  },
});

module.exports = mongoose.model("Customer", schemaCustomer);
