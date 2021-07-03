const path = require("path");
const fs = require("fs");
const model = {
    allProyect: function() {
        const directory = path.resolve(__dirname,"../data","proyectos.json");
        const file = fs.readFileSync(directory,"utf-8");
        const convert = JSON.parse(file);
        return convert;
    },
    oneProyect: function (id) {
        const proyectos = this.allProyect();
        let resultado = proyectos.find(element => element.id == id);
        return resultado;
    },
    newProyect: function(data,file){
        const directory = path.resolve(__dirname, "../data", "proyectos.json");
        let productos = this.allProyect();
        let nuevo = {
            id: productos.length > 0 ? productos[productos.length-1].id + 1 : 1,
            nombre: data.nombreProducto,
            contribucionActual: 0,
            contribucionFinal: 10000,
            fecha: data.fecha,
            patrocinadores: 20,
            ubicacion: data.ubicacion,
            autor: 1,
            categoria: parseInt(data.categoria),
            images: file.map( image =>  String(data.nombreProducto).trim().replace(/\s+/g, '') + "/" + image.filename),
        }
        productos.push(nuevo);
        fs.writeFileSync(directory, JSON.stringify(productos,null,2));
        return true
    },
    proyectsByCategory: function(idCategory){
        const proyectos = this.allProyect();
        let resultado = proyectos.filter(element => element.category == idCategory);
        return resultado;
    },
    editProyect: function(data,file,id){
        const directory = path.resolve(__dirname,"../data","proyectos.json")
        let proyectos = this.allProyect();
        proyectos.map(proyecto => {
            if(proyecto.id == id){
                proyecto.nombre = data.nombre,
                proyecto.contribucionFinal = 10000,
                proyecto.fecha = data.fecha,
                proyecto.patrocinadores = 20,
                proyecto.ubicacion = data.ubicacion,
                proyecto.autor = 1,
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
    }
}

module.exports = model;