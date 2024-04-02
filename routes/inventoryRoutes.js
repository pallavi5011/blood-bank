const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const { createInventoryController, getInventoryController } = require("../controllers/inventoryController");

const router = express.Router();

//ADD INVENTORY
router.post('/create-inventory', authMiddelware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddelware, getInventoryController);

module.exports = router;