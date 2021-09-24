// ************ Require's ************

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const path = require("path");
const multer = require('multer');
const isLogged = require("../middlewares/logged");
const validLogin = require("../middlewares/validLogin");
const validRegister = require("../middlewares/validRegister");

// ************ Multer ************

let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname,"../../public/uploads","avatars"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage:dest});

// ************ Rutas ************

router.get("/ingresar", userController.login);

router.get("/registrarse", userController.register);

router.get("/usuarios", userController.index);

router.get("/perfil/:id",[isLogged], userController.perfil);

router.get("/cerrarSesion", userController.logout);

router.get("/editarUsuario/:id", userController.edit);

router.get("/borrar/:id", userController.borrar)

router.post("/guardarUsuario",[upload.single("fotoAvatar")], userController.create);

router.post("/ingresarUsuario",[validLogin], userController.Acceso);

router.put("/actualizarUsuario/:id",[upload.single("fotoAvatar")], userController.updateSQL);

router.delete("/borrar", userController.delete);



module.exports = router;
