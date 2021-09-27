// ************ Require's ************


const db = require("../database/models");


// ************ Middleware ************

module.exports = async (req,res,next) => {
    try{
        let admin
        let user
        console.log("REQ.BODY", req.body)
        if(req.cookies.email){
            admin = await db.User.findOne({where: {email: req.body.correo}});
            req.session.user = admin
        }
        res.locals.user.admin = user;
        next();
    }catch(error){
    console.log(error)
    res.send(error)
    }
}