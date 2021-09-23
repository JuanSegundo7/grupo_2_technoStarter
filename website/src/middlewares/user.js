// ************ Require's ************


const db = require("../database/models");


// ************ Middleware ************

module.exports = async (req,res,next) => {
    let user = null;
    if(req.cookies.email && !req.session.user){
        user = await db.User.findOne({where: {email: req.cookie.email}});
        req.session.user = user
    }
    if(req.session.user){
        user = req.session.user;
    }
    res.locals.user = user;
    console.log(res.locals.user)
    next();
}

