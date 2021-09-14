// ************ Require's ************

const express = require('express');
const path = require("path");
const fs = require("fs");
const router = express.Router();
const productController = require("../controllers/productController");
const isLogged = require("../middlewares/logged");
const { body } = require("express-validator");
const multer = require('multer');

// ************ Multer ************

const dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let dir = path.resolve(__dirname,"../../public/uploads","products", String(req.body.nombreProducto).trim().replace(/\s+/g, ''))
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        cb(null, dir)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage:dest});


// ************ Rutas ************

router.get("/producto/:id", productController.index);

router.get("/crear", productController.create);

router.post("/guardar",[upload.any(),isLogged], productController.save);

router.get("/editar/:id",[isLogged], productController.edit);

router.post("/contribuir/:id", [isLogged], productController.contribucion);

router.put("/actualizar/:id",[upload.any()], productController.updateSQL);

router.delete("/borrar/:id",productController.delete);



module.exports = router;