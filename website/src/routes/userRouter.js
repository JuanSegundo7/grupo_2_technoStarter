// ************ Require's ************

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const path = require("path");
const fs = require("fs");
const { body } = require("express-validator");
const multer = require('multer');

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

router.get("/editarUsuario/:id", userController.edit);

router.post("/guardarUsuario",[upload.single("fotoAvatar")], userController.save);

router.put("/actualizarUsuario/:id",[upload.single("fotoAvatar")], userController.update);

router.post("/ingresarUsuario", userController.login);

router.delete("/borrar",userController.delete);



module.exports = router;
