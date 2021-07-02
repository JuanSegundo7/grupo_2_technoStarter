/***Const Models */

const categoria = require("../models/categoria");

const categorias = {
    show: (req,res) => res.render("categorias/robotica",{categoria:categoria.oneCategoria(req.params.id)})
    /**agregar switch*/
};

module.exports = categorias;