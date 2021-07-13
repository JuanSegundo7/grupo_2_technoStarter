const express = require("express");
const categoriasController = require("../controllers/categoriasController");
const router = express.Router();

router.get("/:category", categoriasController.show)

module.exports = router;
