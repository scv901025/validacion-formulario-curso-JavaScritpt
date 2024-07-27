const submitFunction = (event) =>{
    if(!validarFormulario()){
        event.preventDefault();
    }
    else{
        event.preventDefault();
        alert(
            'Los datos enviados fueron: \n'+
            'Nombre: '+ document.getElementById('nombre').value + '\n'+
            'Apellido: '+ document.getElementById('apellido').value + '\n'+
            'Documento: '+ document.getElementById('documento').value + '\n'+
            'Email: '+ document.getElementById('email').value + '\n'+
            'Edad: '+ document.getElementById('edad').value + '\n'+
            'Actividad: '+ document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio: '+ document.getElementById('nivelEstudio').value + '\n'
        )
    }
}

document.getElementById('formulario').addEventListener('submit',submitFunction) //escucha el envio del formulario

function validarFormulario (){
    const campoTexto=document.querySelectorAll('input[type="text"]');
    let validacionCorrecta=true;

    //validacion campos de texto

    campoTexto.forEach(campo=> {
        let errorCampo= document.getElementById('error'+campo.id.charAt(0).toUpperCase()+campo.id.slice(1)) //errorNombre errorApellido....
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'este campo es requerido')
            validacionCorrecta=false
        }
        else if(campo.value.length>0 && campo.value.length<3){
            mostrarError(errorCampo, 'este campo debe tener al menos 3 caracteres')
            validacionCorrecta=false
        }
        else{
            ocultarError(errorCampo)
        }
    })

    //validacion email

    const email=document.getElementById('email');
    let errorEmail =document.getElementById('errorEmail')

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        ocultarError(errorEmail)
    }
    else{
        mostrarError(errorEmail,'Ingrese un correo electronico valido')
    }

    //validacion edad

    const edad=document.getElementById('edad');
    const errorEdad=document.getElementById('errorEdad')

    if (edad.value<18){
        mostrarError(errorEdad, 'debes ser mayor de 18 años para registrarte')
        validacionCorrecta=false
    }
    else{
        ocultarError(errorEdad)
    }

    //validacion actividad

    const actividad=document.getElementById('actividad');
    const errorActvidad=document.getElementById('errorActividad')

    if(actividad.value==''){
        mostrarError(errorActvidad,'por favor seleccione una actividad')
        validacionCorrecta=false
    }
    else{
        ocultarError(errorActvidad)
    }

    //validacion de nivel de estudios

    const nivelEstudio=document.getElementById('nivelEstudio')
    const errorNivelEstudio=document.getElementById('errorNivelEstudio')

    if(nivelEstudio.value==''){
        mostrarError(errorNivelEstudio,'por favor seleccione un nivel de estudio')
        validacionCorrecta=false
    }
    else{
        ocultarError(errorNivelEstudio)
    }

    //validar los terminos

    const aceptoTerminos=document.getElementById('aceptoTerminos')
    const errorTerminos=document.getElementById('errorTerminos')

    if(!aceptoTerminos.checked){
        mostrarError(errorTerminos, 'debes aceptar los terminos y condiciones')
        validacionCorrecta=false
    }
    else{
        ocultarError(errorTerminos)
    }

    return validacionCorrecta
}

const mostrarError = (elemento, mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) =>{
    elemento.textContent = '';
    elemento.style.display = "none";
}