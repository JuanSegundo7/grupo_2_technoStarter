// ************ Require's ************

const express = require('express');
const path = require("path");
const fs = require("fs");
const router = express.Router();
const contribucionController = require("../controllers/contribucionesController");
const isLogged = require("../middlewares/logged");
const isActive = require("../middlewares/isActive");

// ************ Rutas ************

router.get("/:id", [isLogged], contribucionController.agregarProyecto);

router.post("/contribuir", [isLogged, isActive], contribucionController.contribuir);