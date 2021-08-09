const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/:id", cartController.cart);

module.exports = router;