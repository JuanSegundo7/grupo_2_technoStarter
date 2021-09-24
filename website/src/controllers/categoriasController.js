// ************ Require's ************

const db = require("../database/models");

// ************ Controller ************

const categorias = {
    show: async (req,res) => {
        try {
            let categoriaTitulo = await db.Category.findOne({category: req.params.category})
            let categoriaBuscar = await db.Category.findAll()
            let proyectos = await db.Proyect.findAll()
            let valor =  proyectos.filter(element => element.categoria_id == categoriaBuscar.id);
            console.log("VALOR", valor)
            return res.send(valor)
            return res.render("categorias/robotica",{proyectos, categorias})
        }catch (error){
            console.log(error)
            res.send(error)
        }
    }
};

module.exports = categorias;