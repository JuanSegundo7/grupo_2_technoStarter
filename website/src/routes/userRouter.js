// ************ Require's ************

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const path = require("path");
const fs = require("fs");
const { body } = require("express-validator");
const multer = require('multer');

// ************ Multer ************

const dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        let dir = path.resolve(__dirname,"../../public/uploads","avatars", String(req.body.nombreUsuario).trim().replace(/\s+/g, ''))
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        if(extension.indexOf("jpg") > 0){
            cb(null, dir)
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage:dest});

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

router.get("/registrarse", userController.register);

router.get("/editarUsuario/:id", userController.edit);

router.post("/guardarUsuario",[upload.any("fotoUsuario"), validacionRegister], userController.save);

router.put("/actualizarUsuario/:id",[upload.any("fotoUsuario")], userController.update);

router.post("/ingresar", validacionLogin ,userController.processLogin);

router.delete("/borrar",userController.delete);



module.exports = router;
