// ************ Require's ************

const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")

// ************ Rutas ************

router.get("/", mainController.index);
router.get("/nosotros", mainController.nosotros);
router.get("/descubrir", mainController.descubrir);


module.exports = router;
