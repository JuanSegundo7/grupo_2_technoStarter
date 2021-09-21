// ************ Require's ************

const {body} = require("express-validator");
const db = require("../database/models");

// ************ Middleware ************

module.exports = [
    body("email").isEmail().custom(async(value) => {
        let registered = db.User.findOne({where: {email: value}});
        if(registered) {
            return Promise.reject("El e-mail ingresado ya existe");
        }
        return true;
    }),
    body("clave").isLength({min:4})
]