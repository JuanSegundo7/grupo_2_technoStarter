// ************ Require's ************

const {body} = require("express-validator");
const userModel = require("../models/usuario");

// ************ Middleware ************

module.exports = [
    body("email").isEmail().custom(value => {
        let registered = userModel.findByEmail(value);
        if(registered) {
            return Promise.reject("El e-mail ingresado ya existe");
        }
        return true;
    }),
    body("clave").isLength({min:4})
]