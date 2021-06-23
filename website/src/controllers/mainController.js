const main = {
    index: (req,res) => {
        return res.render("home");
    },
    nosotros: (req,res) => {
        return res.render("nosotros");
    },
    crear: (req,res) => {
        return res.render("crearProducto");
    }, // llevarlo al product // 

    editar: (req,res) => { 
        return res.render("editarProducto");
    } // llevarlo al product // 
}

module.exports = main;