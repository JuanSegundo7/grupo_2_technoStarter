const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require('multer');
let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf("jpg") > 0){
            cb(null, path.resolve(__dirname,"../../public/uploads","products"))
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});

router.get("/producto", productController.index);
router.get("/crear-producto", productController.create);
router.get("/editar-producto", productController.edit);
// router.get("/:id",productController)

module.exports = router;