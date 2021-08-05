// ************ Require's ************

const proyecto = require("../models/proyecto");

// ************ Controller ************

const cart = {
    cart: (req, res) => {return res.render("checkout/cart", {proyecto:proyecto.random()});},
};

module.exports = cart;