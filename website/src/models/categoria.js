const path = require("path");
const fs = require("fs");
const db = require("../database/models");
const model = {
    allCategoria: function(){
        const directory = path.resolve(__dirname, "../data", "categorias.json");
        const file = fs.readFileSync(directory, "utf-8");
        const convert = JSON.parse(file);
        return convert
    },
    oneCategoria: async (id) => {
        try{
            const productos = await db.Category.findAll()
            let resultado = productos.find(element => element.id == id);
            return resultado;
        }catch(error){
            console.log(error);
            res.send(error)
        }
    },
    oneCategoriaPorAlias: async () =>{
        const productos = await db.Category.findOne();
        console.log("ACAAA",productos)
        let resultado = productos.find(element => element.nombre == nombre);
        return resultado;
    },
}

module.exports = model;