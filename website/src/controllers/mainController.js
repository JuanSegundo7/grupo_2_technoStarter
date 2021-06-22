const main = {
    index: (req,res) => {
        return res.render("home");
    },

    nosotros: (req,res) => {
        return res.render("nosotros");
    },

    crear: (req,res) => {
        return res.render("crearProducto");
    },

    editar: (req,res) => { 
        return res.render("editarProducto");
    }
}

module.exports = main;