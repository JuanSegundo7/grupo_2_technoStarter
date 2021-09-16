// ************ Require's ************

const { validationResult } = require('express-validator');
const usuariosModel = require("../models/usuario");
const db = require("../database/models");
const bcrypt = require('bcryptjs');

// ************ Controller ************

module.exports = {
    login: (req,res) => {
        return res.render("users/login",{title:"Acceso"});
    },
    register: (req,res) => {
        return res.render("users/register");
    },
    index: async (req,res) => {
        try {
            let user = await db.User.findOne()
            let usuarioCreado = await db.User.findAll()
            // return res.send(user)
            return res.render("users/userList", {usuarios: usuarioCreado, user});
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    create: async (req,res) => {
        // return res.send({data:req.body,errors:null,file:req.file})
        try  {
            let data = req.body;
            let file = req.file;
            
            let userToCreate = {
                nombre: data.nombreUsuario,
                apellido: data.apellidoUsuario,
                email: data.direccionDeCorreoElectronico,
                admin: 0, //data.direccionDeCorreoElectronico.includes(admines) ? true : false,
                clave: bcrypt.hashSync(data.clave,10),
                ubicacion: data.ubicacionUser,
                avatar: file.filename,
            }
    
            let usuarioCreado = await db.User.create(userToCreate);
            
            return res.redirect("/");
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }

        /*const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render("users/register",{errors: errors.mapped(),title:"Ingresar",old:req.body}); 
        }else{
            usuariosModel.newUser(req.body,req.file);
            return res.redirect("/usuario/ingresar");
        }*/
    },
    Acceso: async (req,res) => {
        try{
            const errors = validationResult(req);
            // return res.send(errors)
            if (!errors.isEmpty()){
                return res.render("users/login", { errors: errors.mapped(),title:"Acceso", old:req.body });
            }else{
                let usuario = await db.User.findOne({where: {email: req.body.correo}});
                req.session.user = usuario;
                // return res.send(usuario)
                if(req.body.remember){
                    res.cookie("email",req.body.correo,{maxAge:300000})
                }
                // res.locals.userId = usuario.id;
                return res.redirect("/usuario/perfil")
            }
        }catch(error){
            res.send(error)
        }
    },
    perfil: async (req,res) => {
        try{
            let user = await db.User.findOne(req.session.user)
            // return res.send(user)
            return res.render("users/perfil", {user: user})
        }catch (error) {
            console.log(error);
            res.send(error);
        }
    },
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
    updateSQL: async (req,res) => {
        try {
            let data = req.body;
            let file = req.file;
            await db.User.update({
                nombre: data.nombreUsuario,
                apellido: data.apellidoUsuario,
                email: data.direccionDeCorreoElectronico,
                clave: bcrypt.hashSync(data.clave,10),
                ubicacion: data.ubicacionUser,
                avatar: file.filename
            },{ where: { id: req.params.id }})
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    delete: (req,res) => {
        let result = usuariosModel.deleteUser(req.params.id);
        return result == true ? res.render("/") : res.send("Error al cargar la informacion");
        ;
    },
    logout: async(req,res) => {
        let user = await db.User.findOne();
        res.cookie("email",user.email,{maxAge:0})
        delete req.session.user;
        return res.redirect("/")
    }
}

