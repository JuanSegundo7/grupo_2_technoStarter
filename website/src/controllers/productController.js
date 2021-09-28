// **** Require's ****

const proyecto = require("../models/proyecto");
const db = require("../database/models");

// **** Controller ****

const product = {
    index: async (req, res) => {
        try {
            let proyectoDB = await db.Proyect.findByPk(req.params.id, { include: { association: "imagenes" } })
            let recomendados = [await proyecto.random(), await proyecto.random(), await proyecto.random()]
            // console.log("usuario", user.id);
            // console.log("req.params", req.params.id)
            // return res.send(proyectoDB)
            // return res.send(recomendados)
            // return
            return res.render("products/detalleProyectos", { recomendados, proyectoDB});
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    create: async (req, res) => {
        try {
            let categoria = await db.Category.findAll();
            // console.log(categoria)
            // return res.send(categoria)
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
            // let user = req.session.user;
            //console.log("Usuario en session", req.session.user)
            let user = await db.User.findByPk(req.session.user.id)

            let projectToCreate = { 
                nombre: String(data.nombre),
                ubicacion: String(data.ubicacion),
                contribucion_actual: 0,
                contribucion_final: parseInt(data.precioFinal),
                texto: String(data.texto),
                fecha_inicial: String(new Date().toISOString().slice(0, 10)),
                fecha_limite: data.fechaProyecto,
                usuario_id: user.id,
                categoria_id: parseInt(data.categoria)
            }

            // console.log("ACAAAA",data)
            let projectCreated = await db.Proyect.create(projectToCreate);
            
            //console.log("info proyecto",projectToCreate);
            //console.log("projectCreated", projectCreated.id);
            //console.log("projectCreated", projectCreated);
            
            // imagenes create
            
            let imagenes = [];
            
            Array.from(file).forEach(img => {
                imagenes.push(img.filename);
            })
            //console.log("imagenes", imagenes);
            let imagenesCreated = await imagenes.forEach(img => {  
                db.Image.create({
                    url_imagen: "/"+ data.nombre +"/" + img,
                    proyecto_id: projectCreated.id
            })
            /**image: file.map(image => String(req.files.filename).trim().replace(/\s+/g, '') + "/" + image.filename),*/

        });
        
        //return res.send(projectCreated);
                
        return res.redirect("/proyecto/contribucion/" + projectCreated.id) 
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    createContribucion: async (req, res) => {
        // let user = await db.User.findOne()
        let proyecto = req.params.id
        try {
            return res.render("products/crearContribucion", {proyecto});
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    saveContributionType: async (req,res) => {
        let user = await db.User.findByPk(req.session.user.id)
        try{
            let data = req.body;
            allContri = [
                {
                    nombre: "Bronce",
                    precio: data.precioBronce,
                    contribucion: String(data.bronce),
                },
                {
                    nombre: "Plata",
                    precio: data.precioPlata,
                    contribucion: String(data.plata),
                },
                {
                    nombre: "Oro",
                    precio: data.precioOro,
                    contribucion: String(data.oro),
                }
            ]
            let contriCreated =  allContri.map(async (contri) => {
                console.log(contri)
                return _contri = await db.Contribution_type.create({
                    nombre: contri.nombre,
                    precio: contri.precio,
                    contribucion: contri.contribucion,
                    proyecto_id: req.params.id
                })
            })
            return res.redirect("/usuario/perfil/" + user.id)
        }
        catch(error){
            console.log(error)
            res.send(error);
        }
    },
    contribucion: async (req, res) => {
        try{
            let result = await proyecto.contribuir(req.body, req.params.id);
            return result ? res.redirect("/proyectos/productos/" + req.params.id) : res.send("Error al cargar la informacion");
        }
        catch(error){
            console.log(error)
            res.send(error)
        }
    },
    edit: async (req, res) => {
        try {
            let proyecto = await db.Proyect.findByPk(req.params.id, {include: "imagenes"});
            let categorias = await db.Category.findAll();
            // return res.send(categorias)
            return res.render("products/editarProyectos",{proyecto, categorias});
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    updateSQL: async (req, res) => { /*preguntar porque esta confuso, ya que este update seria el de POST */
        try {
            data = req.body;
            let one = await db.Proyect.update({
                nombre: data.nombreProducto,
                contribucion_final: data.precioProyecto,
                ubicacion: data.ubicacion,
                texto: String(data.textoProyecto),
                fecha_limite: data.fechaProyecto,
                categoria_id: parseInt(data.categoria)
            },{ where: { id: req.params.id }})
            let two = await db.Image.update({
                url_imagen: data.fotoProyecto,
                proyecto_id: data.id
            },{ where: { id: req.params.id }})
            // console.log(data)
            // console.log({one,two})
            // return res.send(one)
            return res.redirect("/proyecto/editar/contribucion/" + req.params.id)
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    editarContribucion: async (req, res) => {
        try{
            let proyecto = db.Proyect.findByPk(req.params.id)
            return res.render("products/crearContribucion" + req.params.id , {proyecto})
        }catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    editarContribucionPut: async(req,res) => {
        try{
            let data = req.body;
            console.log("DATA", data)
            return res.send(data)
            let proyecto = data.Proyect.update({
                
            })
            return res.redirect("/")
        }catch(error){
            console.log(error)
            res.send(error)
        }
    },
    // update:(req,res) => {
    //     let result = proyecto.edit(req.body,req.file,req.params.id);
    //     return result == true ? res.redirect("/") : res.send("Error al cargar la informacion");
    // },
    borrar: async (req, res) => {
        try{
            let user = await db.User.findOne()
            let proyecto = await db.Proyect.findOne({where: { id: req.params.id}})
            // console.log(proyecto)
            // res.send(proyecto)
            return res.render("products/borrarProyectos", {proyecto: proyecto, user})
        }catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    delete: async (req, res) => {
        try {
            await db.Image.destroy({
                where: { proyecto_id: req.params.id }
            })

            await db.Contribution_type.destroy({
                where: { proyecto_id: req.params.id }
            })

            await db.Proyect.destroy({
                where: { id: req.params.id }
            })

            return res.redirect("/");
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    // borrar: (req,res) => {res.render("products/borrarProyectos", {proyecto:proyecto.oneProyect(req.params.id)});}
};

module.exports = product;