const express = require("express");
const { pid } = require("process");
const router = express.Router();

router.use("/product", require("./Product"));

module.exports = router;
