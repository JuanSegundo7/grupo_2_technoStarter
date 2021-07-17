const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

const model = {
    allUser: function () {
        const directory = path.resolve(__dirname, "../data", "usuarios.json");
        const file = fs.readFileSync(directory, "utf-8");
        const convert = JSON.parse(file);
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
            correo: data.direccionDeCorreoElectronico,
            clave: bcrypt.hashSync(data.clave, 7), 
            ubicacion: data.ubicacionUser,
            admin: false,
            avatar: file.filename
        }
        usuarios.push(nuevo);
        fs.writeFileSync(directory, JSON.stringify(usuarios,null,2));
        return true
    },
    editUser: function(data,file,id){
        const directory = path.resolve(__dirname, "../data", "usuarios.json");
        let usuarios = this.allUser();
        let nuevo = {
            nombre: data.nombreUsuario,
            apellido: data.apellidoUsuario,
            correo: data.direccionDeCorreoElectronico,
            clave: bcrypt.hashSync(data.clave, 7), 
            ubicacion: data.ubicacionUser,
            admin: false,
            avatar: file.filename
        }
        usuarios.push(nuevo);
        fs.writeFileSync(directory, JSON.stringify(usuarios,null,2));
        return true
    },
    deleteUser: function (id) {
        const directory = path.resolve(__dirname,"../data","usuarios.json")
        let usuarios = this.allUser();
        let deleted = this.oneUser(id);
        // eliminamos la imagen de la carpeta upload
        fs.unlinkSync(path.resolve(__dirname, "../../public/uploads/avatars", deleted.image))
        // filtarmos el producto que deaseamos eliminar
        usuarios = usuarios.filter(usuarios => usuarios.id != deleted.id )
        fs.writeFileSync(directory,JSON.stringify(usuarios,null,2));
        return true;
    },
}

module.exports = model;