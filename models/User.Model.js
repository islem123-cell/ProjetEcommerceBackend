const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
    },


    Lastname:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Phone:{
        type:String,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);