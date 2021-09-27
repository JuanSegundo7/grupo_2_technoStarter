// ************ Require's ************

const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const isLogged = require("../middlewares/logged");


router.get("/:id",isLogged, cartController.cart);

router.put("/contribuir/:id",isLogged, cartController.cartPut);


module.exports = router;