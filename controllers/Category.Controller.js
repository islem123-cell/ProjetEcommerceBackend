
const CatergoryModel = require("../models/Category.Model");

const CategoryController = {
  create: function (req, res) {
    CatergoryModel.create(req.body, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "category not created", data: null });
      }
      res.status(200).json({ status: 200, message: "create category", data: item });
    });
  },
  read: function (req, res) {
    CatergoryModel.find({}, function (err, items) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "category not created", data: null });
      }
      res
        .status(200)
        .json({ status: 200, message: "create category", data: items });
    });
  },
  update: function (req, res) {
    CatergoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, item) {
        if (err) {
          res
            .status(406)
            .json({ status: 406, message: "category not created", data: null });
        }
        res
          .status(200)
          .json({ status: 200, message: "create category", data: item });
      }
    );
  },
  delete: function (req, res) {
    CatergoryModel.findByIdAndDelete(req.params.id, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "category not created", data: null });
      }
      res.status(200).json({ status: 200, message: "create category", data: item });
    });
  },
};
module.exports = CategoryController;
