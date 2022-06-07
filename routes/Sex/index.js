const express = require("express");
const sexController = require("./controller");
const router = express.Router();

router.get("/", sexController.getAllSex);
router.post("/createNewSex", sexController.createNewSex);
router.delete("/deleteSex", sexController.deleteSex);
router.put("/editSex", sexController.editSex);

module.exports = router;
