const express = require("express");
const productController = require("./controller");
const router = express.Router();

router.get("/", productController.getProducts);
router.post("/createNewProduct", productController.createNewProduct);
router.delete("/deleteProduct", productController.deleteProduct);
router.put("/editProduct", productController.editProduct);

module.exports = router;
