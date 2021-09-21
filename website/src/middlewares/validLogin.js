// ************ Require's ************

const {body} = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

// ************ Middleware ************

module.exports = [
    body("correo").isEmail().custom(async(value)=> {
        let registered = await db.User.findOne({where: {email: value}});
        if (!registered) {
            return Promise.reject("El email no es valido, pruebe otra vez");
        }
        return true
    }),
    body("clave").isLength({min: 4}).custom(async(value, {req})=> {
        // console.log("REQ!!", req)
        let registered = await db.User.findOne({where: {email: req.body.correo}});
        // console.log("usuario", registered)
        let clave = registered.clave;
        if (bcrypt.compareSync(value, clave)){
            return true;
        }else{
            return Promise.reject("La contraseña no es valida, pruebe otra vez");
        }
    })
]
