const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categoriasController");

router.get("/robotica", categoriasController.robotica);
router.get("/electronica", categoriasController.electronica);
router.get("/impresion", categoriasController.impresion);


module.exports = router;


// ruta dinamica (parametrizada)