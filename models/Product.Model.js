const mongoose = require("mongoose");
const schemaProduct = new mongoose.Schema(
  {
    ref: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      
    },
  

    qte: {
      type: String,
      required: true,
    },
    
    subCategory: {
        type:mongoose.Types.ObjectId,
        ref: 'SubCategory',
        required: true
    },
  },
);
module.exports = mongoose.model("Product", schemaProduct);