// ************ Require's ************

const proyecto = require("../models/proyecto");

// ************ Controller ************

const main = {
    index: (req,res) => {
        return res.render("home", {destacado:proyecto.random(), recomendados:proyecto.recomendados()});
    },
    nosotros: (req,res) => {
        return res.render("technoStarter/nosotros");
    },
    descubrir: (req,res) => {
        return res.render("technoStarter/descubrir");
    },

}

module.exports = main;