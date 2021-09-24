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
                    detail: "http://localhost:3000/api/users/" + usuarin.id
                }
            })
        }catch(error){
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = apiUsuarios;