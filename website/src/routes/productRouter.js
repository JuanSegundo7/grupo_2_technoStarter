const express = require('express');
const path = require("path");
const fs = require("fs");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require('multer');
const dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        let dir = path.resolve(__dirname,"../../public/uploads","products", String(req.body.nombreProducto).trim().replace(/\s+/g, ''))
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        if(extension.indexOf("jpg", "gif", "png") > 0){
            cb(null, dir)
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});

router.get("/producto", productController.index);

router.get("/crear-producto", productController.create);

router.get("/editar-producto/:id", productController.edit);

router.post("/guardar",[upload.any("fotosProyecto")], productController.save);

router.put("/actualizar/:id",[upload.any("fotosProyecto")], productController.update);

router.delete("/borrar/:id",productController.delete);


module.exports = router;