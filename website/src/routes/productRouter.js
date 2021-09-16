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
        let dir = path.resolve(__dirname,"../../public/uploads","products", String(req.body.nombre).trim().replace(/\s+/g, ''))
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

router.get("/crear",[isLogged], productController.create);

router.get("/borrar/:id",[isLogged], productController.borrar);

router.get("/contribucion/:id",[isLogged], productController.createContribucion);

router.get("/editar/:id",[upload.any()],productController.edit);

router.post("/guardarContribucion/:id",[isLogged], productController.saveContributionType);//isLogged

router.post("/guardar",[upload.any()],[isLogged], productController.save); //isLogged

router.post("/contribuir/:id",[isLogged], productController.contribucion);//isLogged

router.put("/actualizar/:id",[upload.any()],[isLogged], productController.updateSQL);

router.delete("/delete/:id",productController.delete);



module.exports = router;