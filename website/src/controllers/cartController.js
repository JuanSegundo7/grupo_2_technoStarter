// ************ Require's ************

const proyecto = require("../models/proyecto");
const db = require("../database/models");


// ************ Controller ************

const cart = {
    cart: async (req, res) => {
        try{
            let user = await db.User.findOne()
            let proyecto = await db.Proyect.findOne()
            return res.render("checkout/cart", {proyecto, user})
        }catch(error){
            console.log(error)
            res.send(error)
        }
    }
}
module.exports = cart;