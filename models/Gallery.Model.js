const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var GallerySchema = new mongoose.Schema({
    url_photo:{
        type:String,
        
    }});

//Export the model
module.exports = mongoose.model('Gallery', GallerySchema);