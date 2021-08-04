// ************ Require's ************

const path = require("path");
const fs = require("fs");
const contribuciones = require("./contribucion");
const contribucion = require("../controllers/contribucionesController");

// ************ Controller ************

module.exports = {
    dir: path.resolve(__dirname, "../data", "contribuciones.json"),
    write: function(data){
        return fs.writeFileSync(this.dir,JSON.stringify(data,null,2));
    },
    allContribution: function() {
        return JSON.parse(fs.readFileSync(this.dir));
    },
    oneContribution: function (id) {
        return this.allContribution().find(contribucion => contribucion.id == id);
    },
    findByUser: function (usuario){
        return this.allContribution().filter(contribucion => contribucion.user == usuario);
    },
    isActive: function (proyecto){
        let proyectoActual = this.oneContribution(proyecto)
        return new Date(proyectoActual.fecha).getTime() > Date.now();
    },
    agregarProyecto: function (){
        const contribuciones = this.allContribution();

    },
    contribuir: function (){
        const contribuciones = this.allContribution();
    },

}