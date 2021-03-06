// ************ Require's ************

const path = require("path");
const fs = require("fs");
const categorias = require("./categoria");
const db = require("../database/models");

// ************ Controller ************

module.exports = {
    dir: path.resolve(__dirname, "../data", "proyectos.json"),
    write: function(data){
        return fs.writeFileSync(this.dir,JSON.stringify(data,null,2));
    },
    allProyect: function() {
        return JSON.parse(fs.readFileSync(this.dir));
    },
    oneProyect: function (id) {
        return this.allProyect().find(user => user.id == id);
    },
    newProyect: function(data,file,user){
        let proyectos = this.allProyect();
        let ultimosProyecto = proyectos[proyectos.length -1];
        let nuevo = {
            id: proyectos.length > 0 ? ultimosProyecto.id +1 : 1,
            nombre: String(data.nombreProducto),
            contribucionActual: 0,
            contribucionFinal: data.precioProyecto,
            texto: String(data.textoProyecto),
            fecha_actual: String(Date.now()),
            fecha: String(data.fechaProyecto),
            patrocinadores: 20,
            ubicacion: String(data.ubicacion),
            autor: user != undefined ? user.id : null,
            contribucionBronce: String(data.bronce),
            precioBronce: data.precioBronce,
            contribucionPlata: String(data.plata),
            precioPlata: data.precioPlata,
            contribucionOro: String(data.oro),
            precioOro: data.precioOro,
            categoria: parseInt(data.categoria),
            images: file.map( image =>  String(data.nombreProducto).trim().replace(/\s+/g, '') + "/" + image.filename),
        }
        proyectos.push(nuevo);
        this.write(proyectos);
        return nuevo
    },
    contribuir:  async (contribucion, proyectoId) => {
        try{
            const proyectos = await db.Proyect.findAll()
            proyectos = proyectos.map(proyecto => {
                if(proyecto.id == proyectoId){
                proyecto.contribucionActual = proyecto.contribucionActual + contribucion;
                return proyecto
                }
                return proyecto
            })
        }catch(error){
            console.log(error);
            res.send(error);
        }
    },
    random: async (req,res) => { 
        try{
            let proyectosDB = await db.Proyect.findAll({include: ['imagenes']})
            // return res.send("hola",proyectosDB)
            // const proyectos = proyecto.findAll(); // proyecto.findAll
            // console.log("idRandom", idRandom)
            // console.log("proyectoDB",proyectosDB)
            let idRandom = Math.floor(Math.random() * (proyectosDB.length) + 1 )
            // console.log("IDDD!!", idRandom )
            let resultado = (proyectosDB.find(proyecto => proyecto.id == idRandom));
            // console.log("resultado", resultado)
            return resultado;
        }catch(error){
            console.log(error);
            res.send(error);
        }
    },
    recomendados: function (proyectos){
        let recomendados = [this.random(proyectos),this.random(proyectos),this.random(proyectos)]
        return recomendados
    },
    recomendados2: function (proyectos){
        let recomendados = [this.random(proyectos),this.random(proyectos),this.random(proyectos),this.random(proyectos)]
        return recomendados
    },
    editProyect: function(data,file,id){
        const directory = path.resolve(__dirname,"../data","proyectos.json")
        let proyectos = this.allProyect();
        proyectos.map(proyecto => {
            if(proyecto.id == id){
                proyecto.nombre = data.nombre,
                proyecto.contribucionFinal = data.precioProyecto,
                proyecto.fecha = data.fecha,
                proyecto.patrocinadores = 20,
                proyecto.ubicacion = data.ubicacion,
                proyecto.autor = data.id,
                proyecto.categoria = parseInt(data.categorias),
                proyecto.images = file.filename
                return proyecto
            }
            return proyecto
        })
        fs.writeFileSync(directory, JSON.stringify(directory,null,2));
        return true;
    },
    deleteProyect: function (id) {
        const directory = path.resolve(__dirname,"../data","proyectos.json")
        let proyectos = this.allProyect();
        let deleted = this.oneProyect(id);
        // eliminamos la imagen de la carpeta upload
        fs.unlinkSync(path.resolve(__dirname, "../../public/uploads/products", deleted.image))
        // filtarmos el producto que deaseamos eliminar
        proyectos = proyectos.filter(proyectos => proyectos.id != deleted.id )
        fs.writeFileSync(directory,JSON.stringify(proyectos,null,2));
        return true;
    },
    proyectsByCategory: async (alias) =>{
        try{
            const proyectos = await this.allWithExtra();
            console.log("ACAA", proyectos)
            let resultado = proyectos.filter(proyecto => proyecto.categoria.alias == alias);
            return resultado;
        }catch(error){
        console.log(error);
        res.send(error)
        }
    },
    allWithExtra: async () => {
        try{
            let proyectos = await db.Proyect.findAll();
            proyectos.map(proyecto => {
                proyecto.categoria = categorias.oneCategoria(proyecto.categoria)
                return proyecto
            });
            return proyectos;
        }catch(error){
            console.log(error)
            res.send(error)
        }
    },
}
