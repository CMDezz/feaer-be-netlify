const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Product } = require("./models/Product");
const mongodbUri = "mongodb://0.0.0.0/feaer";
const Port = 5000;
mongoose
  .connect(mongodbUri, {})
  .then(() => console.log("Connect to mongodb Successfully!"))
  .catch((err) => console.log(err));

const app = express();

// Product.find().then((p) => {
//   p.map((x) => {
//     x.ImageDetail = [
//       "https://i.imgur.com/miLsIPA.jpg",
//       "https://i.imgur.com/Zl0dVvU.jpg",
//     ];
//     x.save();
//   });
// });
app.use(express.json());
app.use(cors());
app.use("/api", require("./routes"));
app.listen(Port, () => {
  console.log(`App is running on Port :${Port}`);
});
