// ************ Require's ************

const proyecto = require("../models/proyecto");
const db = require("../database/models");

// ************ Controller ************

const main = {
    index: async (req,res) => {
        try {
            let imagenes = await db.Image.findAll()
            let proyectos = await db.Proyect.findAll({includes: [{ association: ["categoria","autor","imagenes","contribucion_usuarios"]}]})
                // return res.send(proyectos)
                return res.render("home", {destacado:proyecto.random(proyectos), recomendados:proyecto.recomendados(proyectos)});
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    nosotros: (req,res) => {
        return res.render("technoStarter/nosotros");
    },
    descubrir: (req,res) => {
        return res.render("technoStarter/descubrir");
    },

}

module.exports = main;