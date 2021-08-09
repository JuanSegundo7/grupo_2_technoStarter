// ************ Require's ************

const proyecto = require("../models/proyecto");

// ************ Controller ************

const cart = {
    cart: (req, res) => {return res.render("checkout/cart", {proyecto:proyecto.oneProyect(req.params.id)});},
};

module.exports = cart;