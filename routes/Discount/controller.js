const { Discount } = require("./../../models/Discount");

module.exports.getAllDiscount = (req, res, next) => {
  Discount.find()
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};

module.exports.createNewDiscount = (req, res, next) => {
  const { Name, Value, KindOfDiscount } = req.body;
  Discount.create({ Name, Value, KindOfDiscount })
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
  const { id, Name, Value, KindOfDiscount } = req.body;
  Discount.findById({ _id: id })
    .then((c) => {
      if (!c) Promise.reject("Discount not found");
      if (Name != null && Name != "") c.Name = Name;
      if (Value != null && Value != "") c.Value = Value;
      if (KindOfDiscount != null && KindOfDiscount != "")
        c.KindOfDiscount = KindOfDiscount;

      return c.save();
    })
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};
