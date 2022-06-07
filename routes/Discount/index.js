const express = require("express");
const discountController = require("./controller");
const router = express.Router();

router.get("/", discountController.getAllDiscount);
router.post("/createNewDiscount", discountController.createNewDiscount);
router.delete("/deleteDiscount", discountController.deleteDiscount);
router.put("/editDiscount", discountController.editDiscount);

module.exports = router;
