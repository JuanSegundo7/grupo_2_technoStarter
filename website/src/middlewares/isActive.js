const contribuir = require("../models/contribucion");

module.exports = (req,res,next) => {
    return contribuir.isActive(req.body.proyecto) ? next() : res.redirect("/");
}