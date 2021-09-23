// ************ Require's ************

const categoria = require("../models/categoria");
const proyecto = require("../models/proyecto");
const db = require("../database/models");

// ************ Controller ************

const categorias = {
    show: (req,res) => res.render("categorias/robotica",{destacado:proyecto.random(), proyectos:proyecto.proyectsByCategory(req.params.category), categorias:categoria.oneCategoriaPorAlias(req.params.category)})
};

module.exports = categorias;