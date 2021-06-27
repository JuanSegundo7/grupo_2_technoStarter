const main = {
    index: (req,res) => {
        return res.render("home");
    },
    nosotros: (req,res) => {
        return res.render("nosotros");
    },

}

module.exports = main;