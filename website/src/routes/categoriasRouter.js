const express = require("express");
const categoriasController = require("../controllers/categoriasController");
const router = express.Router();

router.get("/categorias/:id", (req,res) => {
let idCategoria = req.params.id;
if(idCategoria == categoriasController.id){
    res.send(categoriasController.id);
}else{
    res.send("No se encuentra la categoria solicitada")
}
})

module.exports = router;

/*router.get("/robotica", categoriasController.robotica);
router.get("/electronica", categoriasController.electronica);
router.get("/impresion", categoriasController.impresion);*/

// ruta dinamica (parametrizada)