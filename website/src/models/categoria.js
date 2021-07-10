const path = require("path");
const fs = require("fs");
const model = {
    allCategoria: function(){
        const directory = path.resolve(__dirname, "../data", "categorias.json");
        const file = fs.readFileSync(directory, "utf-8");
        const convert = JSON.parse(file);
        return convert
    },
    oneCategoria: function (id){
        const productos = this.allCategoria();
        let resultado = productos.find(element => element.id == id);
        return resultado;
    },
    
    
}

module.exports = model;