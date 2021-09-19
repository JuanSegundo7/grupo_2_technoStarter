// ************ Require's ************


const db = require("../database/models");


// ************ Middleware ************

module.exports = (req,res,next) => {
    let user = null;
    if(req.cookies){
        console.log("req.cookies",req.cookies)
        user = db.User.findOne(req.params.email);
        console.log("user2",user)
    }else if(req.session && req.session.user){
        user = req.session.user;
        console.log("user3",user)
    }
    res.locals.user = user;
    next();
}

