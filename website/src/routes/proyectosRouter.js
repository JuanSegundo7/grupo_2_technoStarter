const express = require("express");
const router = express.Router();
const proyectosController = require("../controllers/proyectosController");

router.get("/robotica", proyectosController.robotica);
router.get("/electronica", proyectosController.electronica);
router.get("/impresion", proyectosController.impresion);


module.exports = router;


// ruta dinamica (parametrizada)