// ************ Require's ************
const fs = require("fs");
const { validationResult } = require("express-validator");
const usuariosModel = require("../models/usuario");

const user = {
    login: (req,res) => {
        return res.render("users/login")
    },
    register: (req,res) => {
        return res.render("users/register", {usuarios:usuariosModel.allUser()});
    },
    save: (req,res) => {
        let result = usuariosModel.newUser(req.body,req.files)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion"); 
    },
    update: (req,res) => {
        let result = usuariosModel.editUser(req.body,req.file,req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion");
    },
    edit: (req,res) => {res.render("products/editarUsers", {usuarios:usuariosModel.oneUser(req.params.id)});
    },
    delete: (req,res) => {
        let result = usuariosModel.deleteUser(req.params.id);
        return result == true ? res.render("/") : res.send("Error al cargar la informacion");
        ;
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
}

module.exports = user;