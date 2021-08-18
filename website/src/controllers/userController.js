// ************ Require's ************

const { validationResult } = require('express-validator');
const usuariosModel = require("../models/usuario");
const db = require("../database/models");

// ************ Controller ************

module.exports = {
    login: (req,res) => {
        return res.render("users/login",{title:"Acceso"});
    },
    register: (req,res) => {
        return res.render("users/register", {title:"Ingresar"});
    },
    index: (req,res) => {
        return res.render("users/userList", {usuarios:usuariosModel.allUser()});
    },
    save: (req,res) => {
        // return res.send({data:req.body,errors:null,file:req.file})
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render("users/register",{errors: errors.mapped(),title:"Ingresar",old:req.body}); 
        }else{
            usuariosModel.newUser(req.body,req.file);
            return res.redirect("/usuario/ingresar");
        }
    },
    Acceso: (req,res) => {
        const errors = validationResult(req);
        // return res.send(errors)
        if (!errors.isEmpty()){
            return res.render("users/login", { errors: errors.mapped(),title:"Acceso", old:req.body });
        }else{
            let usuario = usuariosModel.findByEmail(req.body.correo);
            // return res.send(usuario)
            if(req.body.remember){
                res.cookie("email",req.body.correo,{maxAge:300000})
            }
            req.session.user = usuario;
            return res.redirect("/usuario/perfil")
        }

    },
    perfil: (req,res) => res.render("users/perfil", {title:"Perfil"}),
    edit: (req,res) => {res.render("products/editarUsers", {usuarios:usuariosModel.oneUser(req.params.id)});
    },
    delete: (req,res) => {
        let result = usuariosModel.deleteUser(req.params.id);
        return result == true ? res.render("/") : res.send("Error al cargar la informacion");
        ;
    },
    logout: (req,res) => {
        res.cookie("email",req.session.user.email,{maxAge:0})
        delete req.session.user;
        return res.redirect("/")
    }
}

