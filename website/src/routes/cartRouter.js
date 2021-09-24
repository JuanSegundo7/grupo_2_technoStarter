// ************ Require's ************

const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/:id", cartController.cart);

router.put("/contribuir/:id", cartController.cartPut);


module.exports = router;