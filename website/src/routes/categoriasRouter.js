const express = require("express");
const categoriasController = require("../controllers/categoriasController");
const router = express.Router();

router.get("/:category", categoriasController.show)

module.exports = router;

/*router.get("/robotica", categoriasController.robotica);
router.get("/electronica", categoriasController.electronica);
router.get("/impresion", categoriasController.impresion);*/

// ruta dinamica (parametrizada)