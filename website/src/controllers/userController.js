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
    index: (req,res) => {
        return res.render("users/userList", {usuarios:usuariosModel.allUser()});
    },
    save: (req,res) => {
        // return res.send({data:req.body,errors:null,file:req.file})
        let result = usuariosModel.newUser(req.body,req.file)
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
}

module.exports = user;