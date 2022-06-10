const express = require("express");
const productController = require("./controller");
const router = express.Router();

router.get("/", productController.getProducts);
router.post("/createNewProduct", productController.createNewProduct);
router.delete("/deleteProduct", productController.deleteProduct);
router.put("/editProduct", productController.editProduct);

router.get("/getProductById", productController.getProductById);

router.get("/getNewestProducts", productController.getNewestProducts);
router.get("/getTopSellerProducts", productController.getTopSellerProducts);
router.get("/getProductsByTag", productController.getProductsByTag);
module.exports = router;
