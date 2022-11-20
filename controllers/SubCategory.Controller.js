const SubCategoryModel = require("../models/SubCategory.Model");
const SubCategoryController = {
  create: function (req, res) {
    SubCategoryModel.create(req.body, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "subcategory not created", data: null });
      }
      res.status(200).json({ status: 200, message: "create subcategory", data: item });
    });
  },
  read: function (req, res) {
    SubCategoryModel.find({}, function (err, items) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "subcategory not created", data: null });
      }
      res
        .status(200)
        .json({ status: 200, message: "create subcategory", data: items });
    });
  },
  update: function (req, res) {
    SubCategoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, item) {
        if (err) {
          res
            .status(406)
            .json({ status: 406, message: "subcategory not created", data: null });
        }
        res
          .status(200)
          .json({ status: 200, message: "create subcategory", data: item });
      }
    );
  },
  delete: function (req, res) {
    SubCategoryModel.findByIdAndDelete(req.params.id, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "subcategory not created", data: null });
      }
      res.status(200).json({ status: 200, message: "create subcategory", data: item });
    });
  },
};
module.exports = SubCategoryController;
