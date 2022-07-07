const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Product } = require("./models/Product");
const res = require("express/lib/response");
const mongodbUri = "mongodb://0.0.0.0/feaer";
const Port = 5000;
mongoose
  .connect(mongodbUri, {})
  .then(() => console.log("Connect to mongodb Successfully!"))
  .catch((err) => console.log(err));

const app = express();

// Product.find()
//   .populate("Discount")
//   .then((products) => {
//     return products.map((product) => {
//       // if (product.Discount && product.Discount.KindOfDiscount === "donggia") {
//       //   product.FinalPrice = p.Discount.Value;
//       // } else if (
//       //   product.Discount &&
//       //   product.Discount.KindOfDiscount === "giamgia"
//       // ) {
//       //   product.FinalPrice = Math.floor(
//       //     (product.Price * (100 - product.Discount.Value)) / 100
//       //   );
//       // } else {
//       //   product.FinalPrice = product.Price;
//       // }

//       // product.save();
//       console.log(product);
//       // if (product.SalePrice && product.SalePrice != "") {
//       //   console.log("---");
//       //   console.log(product);
//       //   // delete product.SalePrice;
//       // }
//       return product;
//     });
//   })
//   .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api", require("./routes"));
app.listen(Port, () => {
  console.log(`App is running on Port :${Port}`);
});
