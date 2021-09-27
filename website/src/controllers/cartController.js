// ************ Require's ************

const proyecto = require("../models/proyecto");
const db = require("../database/models");


// ************ Controller ************

const cart = {
    cart: async (req, res) => {
        try{
            let proyecto = await db.Proyect.findByPk(req.params.id, {include: {association:"imagenes"}})
            let contribucion = await db.Proyect.findByPk(req.params.id,{include: {association:"contributions"}})
            contribucion = contribucion.contributions
            // return res.send(contribucion)
            return res.render("checkout/cart", {proyecto, contribucion})
        }catch(error){
            console.log(error)
            res.send(error)
        }
    },
    cartPut: async (req,res) => {
        try{
            let data = req.body
            // console.log(data)
            // return res.send(data)
            let proyecto = await db.Proyect.findByPk(req.params.id)
            let contribucion = await db.Proyect.update({
                contribucion_actual: parseInt(proyecto.contribucion_actual) + parseInt(data.medio),
            },{where: {id: req.params.id}})
            return res.redirect("/")
        }catch(error){
            console.log(error)
            res.send(error)
        }
    }
}
module.exports = cart;