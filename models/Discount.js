const mongoose = require("mongoose");

const DiscountSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Value: { type: String, required: true },
});

const Discount = mongoose.model("Discount", DiscountSchema, "Discount");

module.exports = {
  Discount,
  DiscountSchema,
};
