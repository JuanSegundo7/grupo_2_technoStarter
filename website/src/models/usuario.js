const path = require("path");
const fs = require("fs");

const model = {
    allUser: function () {
        const directory = path.resolve(__dirname, "../data", "usuarios.json");
        const file = fs.readFileSync(directory, "utf-8");
        const convert = JSON.parce(file);
        return convert;
    },
    oneUser: function (id) {
        const usuarios = this.allUser();
        let resultado = usuarios.find(element => element.id == id);
        return resultado;
    },
    newUser: function(data,file){
        const directory = path.resolve(__dirname, "../data", "usuarios.json");
        let usuarios = this.allUser();
        let nuevo = {
            id: usuarios.length > 0 ? usuarios[usuarios.length-1].id + 1 : 1,
            nombre: data.nombreUsuario,
            apellido: data.apellidoUsuario,
            correo: data.direccionCorreoElectronico,
            contraseña: data.contraseña, 
            fecha: data.fechaProyecto,
            ubicacion: data.ubicacion,
            admin: Boolean,
            categoria: parseInt(data.categoria),
            avatar: file.map( fotoAvatar =>  String(data.fotoAvatar).trim().replace(/\s+/g, '') + "/" + fotoAvatar.filename),
        }
        usuarios.push(nuevo);
        fs.writeFileSync(directory, JSON.stringify(usuarios,null,2));
        return true
    },
    editUser: function(data,file,id){
        const directory = path.resolve(__dirname, "../data", "usuarios.json");
        let usuarios = this.allUser();
        let nuevo = {
            id: usuarios.length > 0 ? usuarios[usuarios.length-1].id + 1 : 1,
            nombre: data.nombreUsuario,
            apellido: data.apellidoUsuario,
            correo: data.direccionCorreoElectronico,
            contraseña: data.contraseña, 
            fecha: data.fechaProyecto,
            ubicacion: data.ubicacion,
            admin: Boolean,
            categoria: parseInt(data.categoria),
            avatar: file.map( fotoAvatar =>  String(data.fotoAvatar).trim().replace(/\s+/g, '') + "/" + fotoAvatar.filename),
        }
        usuarios.push(nuevo);
        fs.writeFileSync(directory, JSON.stringify(usuarios,null,2));
        return true
    },
}

module.exports = model;