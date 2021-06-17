const proyectos = {
    robotica: (req,res) => {
        res.render("robotica")
    },

    impresion: (req,res) => {
        res.render("impresion")
    },

    electronica: (req,res) => {
        res.render("electronica")
    },

};

module.exports = proyectos;