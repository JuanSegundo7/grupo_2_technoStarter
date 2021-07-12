// ************ Require's ************

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { body } = require("express-validator");

// ************ Express-Validator ************

const validacionRegister = [
    body("nombreUsuario").notEmpty().withMessage("Tenes que completar el campo de Nombre"),
    body("apellidoUsuario").notEmpty().withMessage("Tenes que completar el campo de Apellido"),
    body("direccionDeCorreoElectronico").isEmail().withMessage("Tenes que ingresar un e-mail válido")
]

const validacionLogin = [
    body("direccionDeCorreoElectronico").isEmail().withMessage("Tenes que ingresar un e-mail válido"),
    body("email").isLength({min: 8}).withMessage("La contraseña debe tener minimo 8 caracteres"),
]


// ************ Rutas ************

router.get("/ingresar", userController.login);

router.post("/ingresar", validacionLogin ,userController.processLogin);

router.get("/registrarse", userController.register);

router.post("/", validacionRegister ,userController.store);

module.exports = router;
