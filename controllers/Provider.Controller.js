const ProviderModel = require("../models/Provider.Model");
const ProviderController = {
  create: function (req, res) {
    ProviderModel.create(req.body, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "Provider not created", data: null });
      }
      res.status(200).json({ status: 200, message: "create Provider", data: item });
    });
  },
  read: function (req, res) {
    ProviderModel.find({}, function (err, items) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "Provider not created", data: null });
      }
      res
        .status(200)
        .json({ status: 200, message: "create Provider", data: items });
    });
  },
  update: function (req, res) {
    ProviderModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, item) {
        if (err) {
          res
            .status(406)
            .json({ status: 406, message: "Provider not created", data: null });
        }
        res
          .status(200)
          .json({ status: 200, message: "create Provider", data: item });
      }
    );
  },
  delete: function (req, res) {
    ProviderModel.findByIdAndDelete(req.params.id, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "Provider not created", data: null });
      }
      res.status(200).json({ status: 200, message: "create Provider", data: item });
    });
  },
};
module.exports = ProviderController;
