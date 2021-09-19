

window.addEventListener('load', function() {
    // Require's

    let form = document.getElementById("editarProyectos")
    console.log(form)

    let nombre = document.getElementById("nombre-proyecto")
    console.log(nombre)

    let ubicacion = document.getElementById("ubicacion")
    console.log(ubicacion)

    let categoria = document.getElementsByName("categoria")
    console.log(categoria)

    let texto = document.getElementById("textoProyecto")
    console.log(texto)

    let fotos = document.getElementById("fotosProyecto")
    console.log(fotos)

    let fecha = document.getElementById("fechaProyecto")
    console.log(fecha)

    let precio = document.getElementById("precioProyecto")
    console.log(precio)

    let errors = []

    // Validaciones

    
    nombre.onFocus()

    nombre.addEventListener("blur", (event) =>{
        let errorNombre = []
        if(nombre.value == ""){
            errorNombre.push("el campo nombre está vacio")
        }
        if(errorNombre > 0){
            event.preventDefault()
            console.log("todo correctirijillo")
        }
        
    })


})