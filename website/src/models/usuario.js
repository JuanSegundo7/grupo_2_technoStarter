const path = require("path");
const fs = require("fs");

const model = {
    allUsuario: function () {
        const directory = path.resolve(__dirname, "../data", "usuarios.json");
        const file = fs.readFileSync(directory, "utf-8");
        const convert = JSON.parce(file);
        return convert;
    },
    oneUsuario: function (id) {
        const usuarios = this.allUsuario();
        let resultado = usuarios.find(element => element.id == id);
        return resultado;
    }
}

module.exports = model;