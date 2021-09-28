// ************ REQUIRE ************ // 
const db = require("../../database/models");

const apiProyectos = {
    proyects: async (req,res) => {
        try{

            let Impresion3D = 0
            let Robotica = 0
            let Electronica = 0

            let proyects = await db.Proyect.findAll({include: "imagenes"});

            // console.log(proyects)
            // return res.send(proyects)

            
            let categoriasFinal1 = proyects.map(function(proyects){
                if(proyects.categoria_id === 1){
                    Impresion3D = Impresion3D + 1;
                }else if(proyects.categoria_id === 2){
                    Robotica = Robotica + 1;
                }else if(proyects.categoria_id === 3){
                    Electronica = Electronica + 1
                }
            })

            console.log("Impresion 3D",Impresion3D)
            console.log("Robotica",Robotica)
            console.log("Electronica",Electronica)
        

            console.log("AQUI", categoriasFinal1)
            // return res.send(categoriasFinal1)

            // return res.send(categoriasFinal)
            let proyectsFinal = proyects.map(function (proyectin) {
                return{
                    id: proyectin.id,
                    nombre: proyectin.nombre,
                    descripcion: proyectin.texto,
                    fecha_final: proyectin.fecha_limite,
                    imagenes: proyectin.imagenes,
                    detail: "http://localhost:5000/proyectos/" + proyectin.id
                }
            })

            // return res.send(proyectsFinal)
            return res.status(200).json({
                count: proyects.length,
                countByCategory: {
                    Impresion3D: Impresion3D,
                    Robotica: Robotica,
                    Electronica: Electronica
                },
                products: proyectsFinal
            })
        }catch(error){
            console.log(error)
            res.send(error)
        }
    },
    detail: async (req,res) => {
        try{
            let proyects = await db.Proyect.findByPk(req.params.id,{include: ["imagenes", "contributions"]})
            // console.log("req.body", req.params)
            let valor = proyects.usuario_id
            let unoAMuchos = [proyects.imagenes,proyects.contributions]
            console.log("aca", unoAMuchos)
            let autor = await db.User.findByPk(valor);
            // console.log("id", proyects.usuario_id)
            //  return res.send(proyectsFinal)
            return res.status(200).json({
                proyecto: proyects,
                autor: autor,
                relacion: unoAMuchos,
                imagen: proyects.imagenes[0].url_imagen
            })
            // return res.send()
        }catch(error){
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = apiProyectos