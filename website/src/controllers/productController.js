const product = {

    index: (req,res) => {
    return res.render("products/product");
    },

    crear: (req,res) => {
        return res.render("products/crearProducto");
    }, 

    editar: (req,res) => { 
        return res.render("products/editarProducto");
    } 

};

module.exports = product;