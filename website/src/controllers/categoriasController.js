const categorias = {
    robotica: (req,res) => {
        res.render("categorias/robotica")
    },

    impresion: (req,res) => {
        res.render("categorias/impresion")
    },

    electronica: (req,res) => {
        res.render("categorias/electronica")
    },

};

module.exports = categorias;