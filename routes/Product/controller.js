const { Product } = require("./../../models/Product/Product");

module.exports.getProducts = (req, res, next) => {
  Product.find()
    .then((p) => {
      console.log(p);
      return res.status(200).json(p);
    })
    .catch((err) => res.status(500).json(err));
};
