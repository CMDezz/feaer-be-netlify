const express = require("express");
const router = express.Router();
const tagController = require("./controller");

router.get("/", tagController.getAllTag);
router.post("/createNewTag", tagController.createNewTag);
router.delete("/deleteTag", tagController.deleteTag);
router.put("/editTag", tagController.editTag);

module.exports = router;
