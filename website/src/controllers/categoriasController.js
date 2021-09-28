// ************ Require's ************

const db = require("../database/models");

// ************ Controller ************

const categorias = {
    show: async (req,res) => {
        try {
            let categoriaTitulo = await db.Category.findOne({where:{nombre: req.params.category}})
            let proyectos = await db.Proyect.findAll({where:{categoria_id: categoriaTitulo.id}, include:{association: "imagenes"}},)
            // return res.send(proyectos)
            return res.render("categorias/robotica",{proyectos, categorias: categoriaTitulo})
        }catch (error){
            console.log(error)
            res.send(error)
        }
    }
};

module.exports = categorias;