// ************ Require's ************

const express = require("express");
const router = express.Router();
const api = require("../controllers/apis/apiUsuario")

// ************ Rutas ************

router.get("/users", api.list)

// router.get("/users/:id", api)