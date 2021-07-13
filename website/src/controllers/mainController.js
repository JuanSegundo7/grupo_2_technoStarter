const main = {
    index: (req,res) => {
        return res.render("home");
    },
    nosotros: (req,res) => {
        return res.render("technoStarter/nosotros");
    },
    descubrir: (req,res) => {
        return res.render("technoStarter/descubrir");
    },

}

module.exports = main;