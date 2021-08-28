// ************ Require's ************

const { validationResult } = require('express-validator');
const usuariosModel = require("../models/usuario");
const db = require("../database/models");

// ************ Controller ************

module.exports = {
    login: (req,res) => {
        return res.render("users/login",{title:"Acceso"});
    },
    register: async (req,res) => {
        try  {
            const userCreate = {
                nombre: req.body.nombreUsuario,
                apellido: req.body.apellidoUsuario,
                correo: req.body.direccionDeCorreoElectronico,
                admin: req.body.direccionDeCorreoElectronico.includes(admines) ? true : false,
                clave: bcrypt.hashSync(req.body.clave,10),
                ubicacion: req.body.ubicacionUser,
                avatar: req.file.filename,
            }
            
            let usuarioCreado = await db.User.create(userCreate)

            return res.redirect("/");
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    index: async (req,res) => {
        try {
            let usuarioCreado = await db.User.findAll()
            return res.render("users/userList", {usuarios:usuariosModel.allUser(usuarioCreado)});
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
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
    edit: async (req,res) => {
        try {
            let usuarios = db.User.findByPk()
            res.render("products/editarUsers", {usuarios:usuariosModel.oneUser(usuarios)});
        }
        catch(error){
            console.log(error)
            res.send(error);
        }
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

