

let recordarme = document.querySelector(".fa-bookmark")
// console.log(recordarme)

recordarme.addEventListener("click", async (req,res) => {
    // const db = require("../../src/database/models");
    console.log("ACA ESTOYYY",req.body)
    let proyecto = await db.Proyect.findByPk()
    let remember = await db.Recordarme.create({

    })
})