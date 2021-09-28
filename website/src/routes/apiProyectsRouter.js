// ************ Require's ************

const express = require("express");
const router = express.Router();
const api = require("../controllers/apis/apiProyectos.js")

// ************ Rutas ************

router.get("/proyectos", api.proyects)

router.get("/proyectos/:id", api.detail)

module.exports = router