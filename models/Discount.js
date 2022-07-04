const mongoose = require("mongoose");

const DiscountSchema = new mongoose.Schema({
  KindOfDiscount: { type: String, required: true },
  Name: { type: String, required: true },
  Value: { type: Number, required: true },
});

const Discount = mongoose.model("Discount", DiscountSchema, "Discount");

module.exports = {
  Discount,
  DiscountSchema,
};
