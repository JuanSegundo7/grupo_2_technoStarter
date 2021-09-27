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

            let categorias = proyects.slice()
            let categoriasFinal1 = categorias.forEach(function(proyects){
                if(proyects.categoria_id === 1){
                    Impresion3D = Impresion3D + 1;
                }else if(proyects.categoria_id === 2){
                    Robotica = Robotica + 1;
                }else if(proyects.categoria_id === 3){
                    Electronica = Electronica + 1
                }
            })

            // console.log("Impresion 3D",Impresion3D)
            // console.log("Robotica",Robotica)
            // console.log("Electronica",Electronica)

            console.log("AQUI", categoriasFinal1)
            return res.send(categoriasFinal1)

            let categoriasFinal = categorias.map(function(categorin){
                return{
                    Impresion3D: categorin.Impresion3D,
                    Impresion3D: categorin.Robotica,
                    Impresion3D: categorin.Tecnologia
                }
            })

            return res.send(categoriasFinal)
            let proyectsFinal = proyects.map(function (proyectin) {
                return{
                    id: proyectin.id,
                    nombre: proyectin.nombre,
                    descripcion: proyectin.texto,
                    fecha_final: proyectin.fecha_limite,
                    imagenes: proyectin.imagenes,
                    detail: "http://localhost:3000/api/proyectos/" + proyectin.id
                }
            })

            // return res.send(proyectsFinal)
            return res.status(200).json({
                count: proyects.length,
                countByCategory: categorias,
                products: proyectsFinal
            })
        }catch(error){
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = apiProyectos