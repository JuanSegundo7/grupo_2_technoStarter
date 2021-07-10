/***Const Models */
const proyecto = require("../models/proyecto");
const categorias = require("../models/categoria");
const usuarios = require("../models/usuario");

const product = {
    index: (req,res) => {return res.render("products/product");},
    create: (req,res) => {return res.render("products/crearProyectos", {categorias:categorias.allCategoria()});}, 
    save: (req,res) => {
        let result = proyecto.newProyect(req.body,req.files)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion"); 
    },
    edit: (req,res) => {res.render("products/editarProyectos", {proyecto:proyecto.oneProyect(req.params.id)});},
    update: (req,res) => {
        let result = proyecto.edit(req.body,req.file,req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion");
    },
    delete: (req,res) => {
        let result = proyecto.delete(req.params.id);
        return result == true ? res.render("/") : res.send("Error al cargar la informacion");
        ;
    },
    borrar: (req,res) => {res.render("products/borrarProyectos", {proyecto:proyecto.oneProyect(req.params.id)});}
};
module.exports = product;