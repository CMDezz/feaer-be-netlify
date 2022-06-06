const express = require("express");
const productController = require("./controller");
const router = express.Router();

router.get("/", productController.getProducts);

module.exports = router;
