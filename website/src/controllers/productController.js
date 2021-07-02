/***Const Models */
const proyecto = require("../models/proyecto");
const categorias = require("../models/categoria");
const usuarios = require("../models/usuario");

const product = {
    index: (req,res) => {return res.render("products/product");},
    create: (req,res) => {return res.render("products/crearProducto");}, 
    save: (req,res) => {
        let result = proyecto.newProyect(req.body,req.file)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion"); 
    },
    edit: (req,res) => {res.render("products/editarProducto", {product:proyecto.oneProyect(req.params.id)})},
    update: (req,res) => {
        let result = proyecto.edit(req.body,req.file,req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion");
    },
    delete: (req,res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion");
    }
};

module.exports = product;