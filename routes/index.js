const express = require("express");
const { pid } = require("process");
const router = express.Router();

router.use("/product", require("./Product"));
router.use("/category", require("./Category"));
router.use("/collection", require("./Collection"));
router.use("/sex", require("./Sex"));
router.use("/tag", require("./Tag"));
router.use("/discount", require("./Discount"));

module.exports = router;
