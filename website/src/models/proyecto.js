const path = require("path");
const fs = require("fs");
const model = {
    allProyecto: function (){
        const directory = path.resolve(__dirname, "../data", "proyectos.json");
        const file = fs.readFileSync(directory, "utf-8"/*preguntarle a edu*/);
        const convert = JSON.parse(file);
        return convert;
    },
    oneProyecto: function (id) {
        const proyectos = this.allProyecto();
        let resultado = proyectos.find(element => element.id == id);
        return resultado;
    }
}

module.exports = model;