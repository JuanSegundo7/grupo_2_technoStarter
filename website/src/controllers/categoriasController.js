/**Const Models**/

const categoria = require("../models/categoria");
const proyecto = require("../models/proyecto");

const categorias = {
    show: (req,res) => res.render("categorias/robotica",{proyectos:proyecto.proyectsByCategory(req.params.id), categoria:categoria.oneCategoria(req.params.id)})
};

module.exports = categorias;