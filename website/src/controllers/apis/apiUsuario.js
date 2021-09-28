// ************ REQUIRE ************ // 
const db = require("../../database/models");

const apiUsuarios = {
    list: async (req,res) => {
        try{
            let usuarios = await db.User.findAll();
            let userNew = usuarios.map(function (usuarin) {
                return{
                    id: usuarin.id,
                    name: usuarin.nombre,
                    email: usuarin.email,
                    detail: "http://localhost:5000/users/" + usuarin.id
                }
            })
            return res.status(200).json({
                count: userNew.length,
                users: userNew
            })
        }catch(error){
            console.log(error)
            res.send(error)
        }
    },
    detail: async (req,res) => {
        try{
            let usuario = await (db.User.findByPk(req.params.id, {attributes: { 
                exclude: ['clave', 'admin']
            }}
            ))
            return res.send(usuario)
        
        }catch(error){
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = apiUsuarios;