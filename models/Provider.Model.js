const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProviderSchema = new mongoose.Schema({
    company:{
        type:String,
        required:true,

    },
});

//Export the model
module.exports = mongoose.model('Provider', ProviderSchema);