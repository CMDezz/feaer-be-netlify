const express = require("express");
const categoryController = require("./controller");
const router = express.Router();

router.get("/", categoryController.getAllCategory);
router.post("/createNewCategory", categoryController.createNewCategory);
router.delete("/deleteCategory", categoryController.deleteCategory);
router.put("/editCategory", categoryController.editCategory);

module.exports = router;
