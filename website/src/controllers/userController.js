const user = {
    login: (req,res) => {
        return res.render("users/login")
    },

    register: (req,res) => {
        return res.render("users/register")
    },

    crear: (req,res) => {
        return res.render("products/crearProducto");
    },

    editar: (req,res) => {
        return res.render("products/editarProducto");
    }
}

module.exports = user;