// ************ Require's ************

const proyecto = require("../models/proyecto");

// ************ Controller ************

const cart = {
    cart: (req, res) => {return res.render("checkout/cart", {proyectos:proyecto.random()});},
};

module.exports = cart;