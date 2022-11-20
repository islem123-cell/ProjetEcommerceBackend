const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var OrderSchema = new mongoose.Schema({
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
        type:String,
        required:true,
        unique:true,
    },
    price_total:{
        type:String,
        required:true,
    },


    state:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Order', OrderSchema);