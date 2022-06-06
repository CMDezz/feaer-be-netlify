const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Price: { type: Number, required: true },
  UrlPath: { type: String, required: true },
  Desc: { type: String },
  Image: [{ type: String, required: true }],
});
const Product = mongoose.model("Product", ProductSchema, "Product");
module.exports = {
  ProductSchema,
  Product,
};
