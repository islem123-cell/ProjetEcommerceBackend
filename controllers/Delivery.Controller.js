const DeliveryModel = require("../models/Delivery.Model");
const DeliveryController = {
  create: function (req, res) {
    DeliveryModel.create(req.body, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "Delivery not created", data: null });
      }
      res.status(200).json({ status: 200, message: "create Delivery", data: item });
    });
  },
  read: function (req, res) {
    DeliveryModel.find({}, function (err, items) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "Delivery not created", data: null });
      }
      res
        .status(200)
        .json({ status: 200, message: "create Delivery", data: items });
    });
  },
  update: function (req, res) {
    DeliveryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, item) {
        if (err) {
          res
            .status(406)
            .json({ status: 406, message: "Delivery not created", data: null });
        }
        res
          .status(200)
          .json({ status: 200, message: "create Delivery", data: item });
      }
    );
  },
  delete: function (req, res) {
    DeliveryModel.findByIdAndDelete(req.params.id, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "Delivery not created", data: null });
      }
      res.status(200).json({ status: 200, message: "create Delivery", data: item });
    });
  },
};
module.exports = DeliveryController;
