// ************ Require's ************

const proyecto = require("../models/proyecto");
const db = require("../database/models");

// ************ Controller ************

const main = {
    index: async (req,res) => {
        try {
            let imagenes = await db.Image.findAll()
            let proyectos = await db.Proyect.findAll({include: [{ association: "imagenes"},{ association: "autor"}]})
            let random = proyecto.random(proyectos);
            //console.log("este", random.imagenes);
            //return res.send(random.imagenes[0] != undefined);
            let recomendados = [proyecto.random(proyectos),proyecto.random(proyectos),proyecto.random(proyectos)]
            // return res.send(recomendados)
            return res.render("home", {random, recomendados});
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