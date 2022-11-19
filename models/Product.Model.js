const mongoose = require("mongoose");
const schemaProduct = new mongoose.Schema(
  {
    ref: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: double,
      required: true,
    },
    description: {
      type: String,
      
    },
  

    qte: {
      type: integer,
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