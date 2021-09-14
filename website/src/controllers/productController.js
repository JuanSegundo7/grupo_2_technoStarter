// **** Require's ****
const session = require("express-session");
const proyecto = require("../models/proyecto");
const categorias = require("../models/categoria");
const db = require("../database/models");
var app = session()



// **** Controller ****

const product = {
    index: async (req, res) => {
        try {
            let proyectos = await db.Proyect.findAll()
            let one = await db.Proyect.findByPk(req.params.id, { include: { association: "imagenes" } })
            let recomendados = [proyecto.random(proyectos), proyecto.random(proyectos), proyecto.random(proyectos)]
            // return res.send(proyectos)
            // return
            return res.render("products/detalleProyectos", { recomendados: recomendados, proyecto: one });
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    create: async (req, res) => {
        try {
            let categoria = await db.Category.findAll();
            //return res.send(categoria)
            return res.render("products/crearProyectos", { categorias: categoria });
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    save: async (req, res) => {
        try {
            let data = req.body;
            //console.log("data", data);
            let file = req.files;
            //console.log("file", file);

            //console.log("Usuario en session", req.session.user)

            let user = req.session.user;

            let projectToCreate = { 
                nombre: String(data.nombre),
                contribucionActual: 0,
                contribucionFinal: parseInt(data.contribucion_final),
                texto: String(data.texto),
                fecha_inicial: String(new Date().toISOString().slice(0, 10)),
                fecha_limite: data.fechaProyecto,
                usuario_id: user.id,
                categoria_id: parseInt(data.categoria)
            }

            //console.log("info proyecto",projectToCreate);

            let projectCreated = await db.Proyect.create(projectToCreate);

            //console.log("projectCreated", projectCreated);
            //console.log("projectCreated", projectCreated.id);

// imagenes create

            let imagenes = [];

            Array.from(file).forEach(img => {
                imagenes.push(img.filename);
            })

            //console.log("imagenes", imagenes);

            let imagenesCreated = await imagenes.forEach(img => {  
                db.Image.create({
                    url_imagen: img,
                    proyecto_id: projectCreated.id
            })
        });

            return res.send(file)

                /**image: file.map(image => String(req.files.filename).trim().replace(/\s+/g, '') + "/" + image.filename),*/
            
            



            contribucionesToCreate = {
                contribucionBronce: String(data.bronce),
                Bronce: data.precioBronce,
                contribucionPlata: String(data.plata),
                Plata: data.precioPlata,
                contribucionOro: String(data.oro),
                Oro: data.precioOro,
            }

            contribucionCreated

            


            // console.log(proyecto)
            return res.send(projectCreated);
            return result ? res.redirect("/") : res.send("Error al cargar la informacion");
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    contribucion: (req, res) => {
        let result = proyecto.contribuir(req.body, req.params.id);
        return result ? res.redirect("/proyectos/productos/" + req.params.id) : res.send("Error al cargar la informacion");
    },
    edit: async (req, res) => {
        try {
            let one = await db.Proyect.update({ where: { id: req.params.id } })
            res.render("products/editarProyectos" + one);
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    // update:(req,res) => {
    //     let result = proyecto.edit(req.body,req.file,req.params.id);
    //     return result == true ? res.redirect("/") : res.send("Error al cargar la informacion");
    // },
    updateSQL: async (req, res) => { /*preguntar porque esta confuso, ya que este update seria el de POST */
        try {
            let result = await db.Proyect.update({
                body: req.body,
                file: req.file
            })
                ({ where: { id: req.params.id } });
            res.redirect(result)
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    delete: async (req, res) => {
        try {
            let one = await db.Proyect.destroy({
                where: { id: req.params.id }
            });
            return result == true ? res.render("/" + one) : res.send("Error al cargar la informacion");
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    // borrar: (req,res) => {res.render("products/borrarProyectos", {proyecto:proyecto.oneProyect(req.params.id)});}
};

module.exports = product;