const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Price: { type: Number, required: true },
  Desc: { type: String, required: true },
  Sex: { type: mongoose.Schema.Types.ObjectId, ref: "Sex", required: true },
  Category: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Category", require: true },
  ],
  Collection: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Collection", required: true },
  ],
  SizeAndStock: { type: mongoose.Schema.Types.Mixed, required: true },
  Image: [{ type: String, required: true }],
});
const Product = mongoose.model("Product", ProductSchema, "Product");
module.exports = {
  ProductSchema,
  Product,
};
