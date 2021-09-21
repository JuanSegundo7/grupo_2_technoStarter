// ************ Middleware ************

module.exports = (req,res,next) => {
    if (res.locals.user){
        return next ();
    }else{
        // console.log('LOGGED ELSE PAPA')
        return res.redirect("/")
    }
}