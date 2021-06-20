const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/crear-producto", productController.crear);
router.get("/editar-producto", productController.editar);

module.exports = router;