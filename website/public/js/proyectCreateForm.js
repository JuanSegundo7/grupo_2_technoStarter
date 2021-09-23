window.addEventListener('load', function() {
    // Require's

    let form = document.getElementById("crearProductos")
    // console.log(form)

    let nombre = document.getElementById("nombreProducto")
    // console.log(nombre)

    let ubicacion = document.getElementById("ubicacion")
    // console.log(ubicacion)

    let categoria = document.getElementsByName("categoria")
    // console.log(categoria)

    let texto = document.getElementById("textoProyecto")
    // console.log(texto)

    let fotos = document.getElementById("fotosProyecto")
    // console.log(fotos)

    let fecha = document.getElementById("fecha_limite")
    // console.log(fecha)

    let precio = document.getElementById("precioProyecto")
    // console.log(precio)

    let botones = document.getElementsByClassName("flex-botones")
    // console.log(botones)

    // console.log(ulErrores)
    
    
    form.addEventListener("submit", function(e){
        e.preventDefault()
        let ulErrores = document.querySelector(".errores")
        let errors = []
        if(nombre.value < 5){
            console.log("El nombre tiene que ser mayor a 3 caracteres")
            errors.push("El nombre tiene que ser mayor a 3 caracteres")
            console.log(errors)
        }
        if(texto.value < 20){
            console.log("El texto tiene que ser mayor a 20 caracteres")
            errors.push("El texto tiene que ser mayor a 20 caracteres")
            console.log(errors)
        }
        let extensiones = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!fotos.value){
            console.log("Debes seleccionar una o varias imagenes")
        }else if(!extensiones.exec(fotos.value)){
            console.log("El formato de alguna foto no es valido")
            errors.push("El formato de alguna foto no es valido")
            errors= []
        }
        if(fecha.value < new Date().toISOString().slice(0, 10) ){
            console.log("La fecha no puede ser anterior al dia de hoy")
            errors.push("La fecha no puede ser anterior al dia de hoy")
        }
        if(errors.length > 0){
            ulErrores.innerHTML = "";
            errors.forEach(error => {
                ulErrores.innerHTML += "<li>" + error + "</li>"
            })
        }else{
            e.target.submit()
        }
    })
    
    
    
    
    
    
    
})