const { Discount } = require("./../../models/Discount");

module.exports.getAllDiscount = (req, res, next) => {
  Discount.find()
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};

module.exports.createNewDiscount = (req, res, next) => {
  const { Name, Value } = req.body;
  Discount.create({ Name, Value })
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};

module.exports.deleteDiscount = (req, res, next) => {
  const { id } = req.body;
  Discount.deleteOne({ _id: id })
    .then(() => res.status(200).json("Deleted Successfully"))
    .catch((err) => res.status(500).json(err));
};
module.exports.editDiscount = (req, res, next) => {
  const { id, Name, Value } = req.body;
  Discount.findById({ _id: id })
    .then((c) => {
      if (!c) Promise.reject("Discount not found");
      if (Name != null && Name != "") c.Name = Name;
      if (Value != null && Value != "") c.Value = Value;
      return c.save();
    })
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};
