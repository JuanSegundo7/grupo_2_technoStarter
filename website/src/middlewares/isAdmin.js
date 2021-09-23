// ************ Require's ************


const db = require("../database/models");


// ************ Middleware ************

module.exports = async (req,res,next) => {
    let user
    if(req.cookies.email && !req.session.user){
        user = await db.User.findOne({where: {email: req.body.correo}});
        req.session.user = user
    }else if(req.session.user){
        user = req.session.user;
    }
    res.locals.user = user;
    next();
}