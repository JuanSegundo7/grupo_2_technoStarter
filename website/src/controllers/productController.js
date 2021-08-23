// ************ Require's ************

const proyecto = require("../models/proyecto");
const categorias = require("../models/categoria");
const db = require("../database/models");


// ************ Controller ************

const product = {
    index: async (req,res) => {
        try {
            çonst 
            let proyectos = await db.Proyect.findAll()
            let one = await db.Proyect.findByPk(req.params.id)
            return res.render("products/detalleProyectos", {proyectos:proyecto.random(proyectos), proyecto:proyecto.oneProyect(one), recomendados:proyecto.recomendados2(proyectos)});
        } 
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    create: async (req,res) => {
        try {
            let categorias = await db.Category.findAll();
            
            let proyecto = {
                nombre: String(req.body.nombreProducto),
                contribucionActual: 0,
                contribucionFinal: req.body.precioProyecto,
                texto: String(req.body.textoProyecto),
                fecha_actual: String(Date.now()),
                fecha: String(req.body.fechaProyecto),
                patrocinadores: 20,
                ubicacion: String(req.body.ubicacion),
                autor: user != undefined ? user.id : null,
                contribucionBronce: String(req.body.bronce),
                precioBronce: req.body.precioBronce,
                contribucionPlata: String(req.body.plata),
                precioPlata: req.body.precioPlata,
                contribucionOro: String(req.body.oro),
                precioOro: req.body.precioOro,
                categoria: parseInt(req.body.categoria),
                images: file.map( image =>  String(req.file.nombreProducto).trim().replace(/\s+/g, '') + "/" + image.filename),
            }

            let proyectos = await db.Proyect.create(proyecto);
            return res.render("products/crearProyectos", {categorias:categorias.allCategoria(categorias)}, proyectos);
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    save: async (req,res) => {
        try{
            let result = db.Proyect.save({
                body: req.body,
                files: req.files,
                user: req.session.user});
            return result ? res.redirect("/") : res.send("Error al cargar la informacion"); 
        } catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    contribucion: (req,res) => {
        let result = proyecto.contribuir(req.body, req.params.id);
        return result ? res.redirect("/proyectos/productos/" + req.params.id) : res.send("Error al cargar la informacion");
    },
    edit: async (req,res) => {
        try { 
            let one = await db.Proyect.edit({id: req.params.id})
            res.render("products/editarProyectos", {proyecto:proyecto.oneProyect(one)});
        } 
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    update: async (req,res) => {
        let result = proyecto.edit(req.body,req.file,req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion");
    },
    delete: async (req,res) => {
        try {
            let one = await db.Proyect.destroy({
                where: {id: req.params.id}
            });
            let result = proyecto.delete(one);
            return result == true ? res.render("/") : res.send("Error al cargar la informacion");
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }   
    },
    borrar: (req,res) => {res.render("products/borrarProyectos", {proyecto:proyecto.oneProyect(req.params.id)});}
};

module.exports = product;