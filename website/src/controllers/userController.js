// ************ Require's ************
const fs = require("fs");
const { validationResult } = require("express-validator");
const usuariosModel = require("../models/usuario");

const user = {
    login: (req,res) => {
        return res.render("users/login")
    },
    register: (req,res) => {
        return res.render("users/register")
    },
    processLogin: (req,res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            let usersJSON = fs.readFileSync("usuarios.json");
            let users;
            if (usersJSON == ""){
                users = []
            }else{
                users = JSON.parse(usersJSON)
            }
            for (let i = 0; i < users.length; i++){
                if(users[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.clave, users[i].clave)){
                        let usuarioALoguearse = users[i];
                        break; 
                    }
                }
            }
            if(usuarioALoguearse == undefined){
                res.render("login", {errors: [
                    {msg: "Credenciales invalidas"}
                ]});
            }
            req.session.usuarioLogueado = usuarioALoguearse;
        }else{
            res.render("login", {errors: errors.errors});
        }
    },
    store: (req,res) => {
        let user = req.body;
        userId = usuariosModel.newUser(user);
        res.redirect("/users/" + userId);
    }
}

module.exports = user;