export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
    //parentElement devuelve el nodo padre del DOM Element , o null , 
    //si el nodo no tiene padre o si el padre no es un Element DOM 
    //console.log(input.parentElement);
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}
//Tipo de errores
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío.",
        typeMismatch: "El correo no es válido",
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío.",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    nacimiento: {
        valueMissing: "El campo fecha de nacimiento no puede estar vacío.",
        customError: "Debes tener al menos 18 años de edad",
    },
    numero: {
        valueMissing:"Este campo no puede estar vacío",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 números"
    },
    direccion: {
        valueMissing:"Este campo no puede estar vacío",
        patternMismatch: "La dirección debe contener entre 10 a 40 caracteres"
    },
    ciudad: {
        valueMissing:"Este campo no puede estar vacío",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres"
    },
    estado: {
        valueMissing:"Este campo no puede estar vacío",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres"
    },
};


const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

/*const inputNacimiento = document.querySelector("#birth");

//evento blur, cuando quite o salga de ese evento,(o sea cada vez que el usuario salga de ese input)
//con const no puedes re asignar su valor
inputNacimiento.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
});*/
//Traer el valor del input date o sea la fecha
function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    //mayorEdad(fechaCliente);

    let mensaje = "";
    //funcion para mostrar un mensaje
    if (!mayorEdad(fechaCliente)) {
        mensaje = "Debes tener al menos 18 años de edad."
    }
    input.setCustomValidity(mensaje);
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


