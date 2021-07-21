// ************ Middleware ************

const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

// ************ Controller ************

module.exports = {
    dir: path.resolve(__dirname, "../data", "usuarios.json"),
    write: function(data){
        return fs.writeFileSync(this.dir,JSON.stringify(data,null,2))
    },
    allUser: function () {
        return JSON.parse(fs.readFileSync(this.dir));
    },
    oneUser: function (id) {
        return this.allUser().find(user => user.id == id);
    },
    newUser: function(data){
        let usuarios = this.allUser();
        let lastUser = usuarios[usuarios.length -1];
        let newUser = {
            id: usuarios.length > 0 ? lastUser.id +1 : 1,
            name: data.name ? data.name : String(data.email).trim()
            .replace(/\s/g, "")
            .split("@")[0]
            .toLowerCase(),
            email: String(data.email),
            admin: String(data.email).includes("juansegundomartinez7@gmail.com") ? true : false,
            password: bcrypt.hashSync(data.password,10),
            avatar: null
        };
        usuarios.push(newUser);
        this.write(usuarios)
    },
    editUser: function(data,file,id){
        let usuarios = this.allUser();
        usuarios.map(usuario => {
            if(usuario.id == id ){
                usuario.name = data.name ? data.name : String(data.email).trim()
	            .replace(/\s/g, "")
	            .split("@")[0]
	            .toLowerCase();
                usuario.email = String(data.email);
                usuario.admin = String(data.email).includes("juansegundomartinez7@gmail.com") ? true : false;
                usuario.password = bcrypt.hashSync(data.password,10);
                usuario.avatar = file ? file.filename : null;
                return usuario
            }
            return usuario
        });
        this.write(usuarios)
    },
    deleteUser: function (id) {
        let usuarios = this.allUser();
        let deleted = this.oneUser(id);
        // eliminamos la imagen de la carpeta upload
        fs.unlinkSync(path.resolve(__dirname, "../../public/uploads/avatars", deleted.image))
        // filtarmos el producto que deaseamos eliminar
        usuarios = usuarios.filter(usuarios => usuarios.id != deleted.id )
        return JSON.parse(fs.readFileSync(this.dir));;
    },
    findByEmail: function (email){
        return this.allUser().find(user => user.email == email)
    },
    logout: (req,res) => {
        res.cookie("email",req.session.user.email,{maxAge:0})
        delete req.session.user;
        return res.redirect("/")
    }
}

