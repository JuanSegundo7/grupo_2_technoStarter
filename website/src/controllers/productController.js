// ************ Require's ************

const proyecto = require("../models/proyecto");
const categorias = require("../models/categoria");
const db = require("../database/models");


// ************ Controller ************

const product = {
    index: async (req,res) => {
        try {
            let proyectos = await db.Proyect.findAll()
            let one = await db.Proyect.findByPk(req.params.id, {includes:[{association: "imagenes"}]})
            // res.send(one)
            // return
            return res.render("products/detalleProyectos",{proyecto:one});
        } 
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    create: async (req,res) => {
        try {
            let categoria = await db.Category.findAll();
            let user = await db.User.findOne()
            let file = await db.Image.findAll()
            let proyecto = {
                nombre: String(req.body.nombre),
                contribucionActual: 0,
                contribucionFinal: req.body.contribucion_final,
                texto: String(req.body.texto),
                fecha_actual: String(Date.now()),
                fecha_final: String(req.body.fecha_final),
                patrocinadores: 0,
                ubicacion: String(req.body.ubicacion),
                autor: user != undefined ? user.id : null,
                contribucionBronce: String(req.body.bronce),
                precioBronce: req.body.precioBronce,
                contribucionPlata: String(req.body.plata),
                precioPlata: req.body.precioPlata,
                contribucionOro: String(req.body.oro),
                precioOro: req.body.precioOro,
                categoria: parseInt(req.body.categoria),
                images: file.map( image =>  String(req.file.nombre).trim().replace(/\s+/g, '') + "/" + image.filename),
            }
            let proyectos = await db.Proyect.create(proyecto);
            res.send(proyecto)
            return res.redirect("products/crearProyectos/" + proyectos.id /*preguntar como agregar las categorias */);
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
            let one = await db.Proyect.update({where: {id: req.params.id}})
            res.render("products/editarProyectos" + one);
        } 
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    update:(req,res) => {
        let result = proyecto.edit(req.body,req.file,req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion");
    },
    updateSQL: async (req,res) => { /*preguntar porque esta confuso, ya que este update seria el de POST */
        try {
            let result = await db.Proyect.update({
                body: req.body,
                file: req.file
            })
            ({where:{id: req.params.id}});
            res.redirect(result)
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    delete: async (req,res) => {
        try {
            let one = await db.Proyect.destroy({
                where: {id: req.params.id}
            });
            return result == true ? res.render("/" + one) : res.send("Error al cargar la informacion");
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }   
    },
    borrar: (req,res) => {res.render("products/borrarProyectos", {proyecto:proyecto.oneProyect(req.params.id)});}
};

module.exports = product;