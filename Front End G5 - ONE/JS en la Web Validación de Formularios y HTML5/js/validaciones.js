const inputNacimiento = document.querySelector("#birth");
//evento blur, cuando quite o salga de ese evento
//con const no puedes re asignar su valor
inputNacimiento.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
});
//Traer el valor del input date o sea la fecha
function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    mayorEdad(fechaCliente);

    let mensaje = "";
    //funcion para mostrar un mensaje
    if(!mayorEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad."
    }
    input.setCustomValidity
}

function mayorEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return diferenciaFechas <= fechaActual;
}

/* //mia logica
function mayorEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    //console.log(fecha, "----", fechaActual);
    if (diferenciaFechas <= fechaActual){//(de 2002)2020 <= 2023 = true
        console.log("ERES MAYOR DE EDAD");
    }else{
        console.log("NO ERES MAYOR DE EDAD");
    }
    //console.log(diferenciaFechas <= fechaActual);
}*/


