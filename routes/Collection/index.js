const express = require("express");
const collectionController = require("./controller");
const router = express.Router();

router.get("/", collectionController.getAllCollection);
router.post("/createNewCollection", collectionController.createNewCollection);
router.delete("/deleteCollection", collectionController.deleteCollection);
router.put("/editCollection", collectionController.editCollection);

module.exports = router;
