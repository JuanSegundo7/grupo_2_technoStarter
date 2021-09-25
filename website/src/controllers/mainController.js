// ************ Require's ************

const proyecto = require("../models/proyecto");
const db = require("../database/models");

// ************ Controller ************

const main = {
    index: async (req,res) => {
        try {
            let random = await proyecto.random();
            //return res.send(random.imagenes[0] != undefined);
            let recomendados = [await proyecto.random(), await proyecto.random(), await proyecto.random()]
            recomendados.map(item => item == null ? proyecto.random() : item);
            // return res.send(random)
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