// ************ Require's ************

const proyecto = require("../models/proyecto");
const db = require("../database/models");

// ************ Controller ************

const main = {
    index: async (req,res) => {
        try {
            let user = await db.User.findOne(req.session.user)
            let proyectos = await db.Proyect.findAll({include: [{ association: "imagenes"},{ association: "autor"}]})
            let random = proyecto.random(proyectos);
            //console.log("este", random.imagenes);
            //return res.send(random.imagenes[0] != undefined);
            // return res.send(user)res.send(random)
            let recomendados = [proyecto.random(proyectos),proyecto.random(proyectos),proyecto.random(proyectos)]
            recomendados.map(item => item == null ? proyecto.random(proyectos) : item)
            // console.log("RECOMENDADOS!", recomendados)
            return res.send(recomendados)
            
            // return res.send(recomendados)
            return res.render("home", {random: random == null ? proyecto.random(proyectos) : random, recomendados, user});
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