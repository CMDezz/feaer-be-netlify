const express = require("express");
const productController = require("./controller");
const router = express.Router();

router.get("/", productController.getProducts);
router.post("/createNewProduct", productController.createNewProduct);
router.delete("/deleteProduct", productController.deleteProduct);
router.put("/editProduct", productController.editProduct);

router.get("/getProductById", productController.getProductById);

router.get("/getNewestProducts", productController.getNewestProducts);
router.get("/getProductsByCategory", productController.getProductsByCategory);

router.get("/getTopSellerProducts", productController.getTopSellerProducts);
router.get("/getProductsByTag", productController.getProductsByTag);
router.get("/getProductsByTagId", productController.getProductsByTagId);
router.get("/getProductsByName", productController.getProductsByName);
router.get(
  "/getProductsByCollection",
  productController.getProductsByCollections
);

module.exports = router;
