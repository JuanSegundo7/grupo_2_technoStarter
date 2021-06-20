const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/ingresar", userController.login);
router.get("/registrarse", userController.register);

module.exports = router;
