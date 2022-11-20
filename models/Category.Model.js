const mongoose = require("mongoose"); // appel du mongoose
const schemaCategory = new mongoose.Schema({
  //schema du collection , contenu du collection
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  subCategories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "subcategories",
    },
  ],
});
module.exports = mongoose.model("categories", schemaCategory);
