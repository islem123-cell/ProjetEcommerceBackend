const mongoose = require("mongoose");
const schemaSubCategory = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      //relation entre category and subCategory
      type: mongoose.Types.ObjectId,
      ref: "categories",
      required: true,
    },

  },
);


module.exports = mongoose.model("subcategories", schemaSubCategory);
