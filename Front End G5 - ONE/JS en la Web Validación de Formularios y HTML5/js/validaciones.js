// Función para validar un campo de entrada (input)
export function valida(input) {
  // Obtiene el tipo de input a través de los atributos de datos (data-*)
  const tipoDeInput = input.dataset.tipo;

  // Si hay un validador definido para el tipo de input, llámalo
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
  //parentElement devuelve el nodo padre del DOM Element , o null ,
  //si el nodo no tiene padre o si el padre no es un Element DOM
  //console.log(input.parentElement);

  // Verifica si el input es válido según las restricciones de validación HTML5
  if (input.validity.valid) {
    // Si es válido, elimina la apariencia de error del contenedor del input
    input.parentElement.classList.remove("input-container--invalid");
    // Limpia el mensaje de error
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    // Si no es válido, agrega la apariencia de error al contenedor del input
    input.parentElement.classList.add("input-container--invalid");
    // Muestra el mensaje de error correspondiente al tipo de input y error específico
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}
//Tipo de errores
const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

// Mensajes de error asociados a cada tipo de input y error posible
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
    patternMismatch:
      "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  },
  nacimiento: {
    valueMissing: "El campo fecha de nacimiento no puede estar vacío.",
    customError: "Debes tener al menos 18 años de edad",
  },
  numero: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
  },
  direccion: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "La dirección debe contener entre 10 a 40 caracteres",
  },
  ciudad: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres",
  },
  estado: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El estado debe contener entre 10 a 40 caracteres",
  },
};

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

// Función para mostrar el mensaje de error correspondiente
function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  // Itera a través de los tipos de errores posibles
  tipoDeErrores.forEach((error) => {
    // Verifica si el error está presente en la validación del input
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      // Obtiene el mensaje de error correspondiente al tipo de input y error específico
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
// Función para validar la fecha de nacimiento
function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  //mayorEdad(fechaCliente);

  let mensaje = "";
  //funcion para mostrar un mensaje
  // Verifica si el cliente es mayor de edad
  if (!mayorEdad(fechaCliente)) {
    mensaje = "Debes tener al menos 18 años de edad.";
  }
  // Establece el mensaje de error personalizado en el input
  input.setCustomValidity(mensaje);
}

// Función para verificar si alguien es mayor de edad
function mayorEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
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
