window.addEventListener('load', function() {

    let form = document.getElementById("formPrincipal")
    // console.log(form)

    let nombre = document.getElementById("nombreUsuario")
    // console.log(nombre)

    let apellido = document.getElementById("apellidoUsuario")
    // console.log(apellido)

    let email = document.getElementById("direccionCorreoElectronico")
    // console.log(email)

    let clave = document.getElementById("clave")
    // console.log(ubicacion)

    let foto = document.querySelector(".fotoAvatar")
    // console.log(foto)

    let botones = document.getElementById("flex-button")
    // console.log(botones)

    form.addEventListener("submit", function(e){
        e.preventDefault()
        let errors = [];
        let ulErrores = document.querySelector(".errores");

        if(nombre.value >= 2){
            console.log("El nombre tiene que ser mayor o igual a 2 caracteres")
            errors.push("El nombre tiene que ser mayor o igual a 2 caracteres")
        }

        let emailValido = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!email.value){
            console.log("Debes ingresar un email")
            errors.push("Debes ingresar un email")
        }else if(!emailValido.test(String(email.value).toLowerCase())){
            console.log("El correo electrónico debe tener un formato válido");
            errors.push("El correo electrónico debe tener un formato válido");
        }

        if(!clave.value){
            console.log("Debes ingresar una contraseña")
            errors.push("Debes ingresar una contraseña")
        }else if(clave.value > 8){
            console.log("La contraseña debe tener minimo 8 caracteres")
            errors.push("La contraseña debe tener minimo 8 caracteres")
        }

        let extensiones = /(.jpg|.jpeg|.png|.gif)$/i;

        if(!foto.value){
            console.log("Debes subir una imagen")
            errors.push("Debes subir una imagen")
        }else if(!extensiones.exec(foto.value)){
            console.log("El formato de la imagen no es valido")
            errors.push("El formato de la imagen no es valido")
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