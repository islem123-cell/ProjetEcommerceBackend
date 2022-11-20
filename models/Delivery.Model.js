const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var DeliverySchema = new mongoose.Schema({
    adresse:{
        type:String,
        required:true,
        unique:true,
    }
  
});

//Export the model
module.exports = mongoose.model('Delivery', DeliverySchema);