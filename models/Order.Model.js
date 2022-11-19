const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    ref:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    description:{
        type:String,
        required:true,
        unique:true,
    },
    qte_totale:{
        type:Integer,
        required:true,
        unique:true,
    },
    price_total:{
        type:double,
        required:true,
    },


    state:{
        type:Boolean,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Order', userSchema);