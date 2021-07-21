// ************ Require's ************

const {body} = require("express-validator");
const bcrypt = require("bcryptjs");
const userModel = require("../models/usuario");

// ************ Middleware ************

module.exports = [
    body("email").isEmail().custom(value => {
        let registered = userModel.findByEmail(value);
        if (!registered) {
            return Promise.reject("El email no es valido, pruebe otra vez");
        }
        return true
    }),
    body("clave").isLength({min: 4}).custom((value, { req }) => {
        let registered = userModel.findByEmail(req.body.email);
        if (bcrypt.compareSync(value, registered.clave) != true) {
            return Promise.reject("La contraseña no es valida, pruebe otra vez");
        }
    })
]
