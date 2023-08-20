export function valida(input) {
  // Obtiene el tipo de input a través de los atributos de datos (data-*)
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  //console.log(input.parentElement); //Este se dirige a la clase padre

  //console.log(input.validity.valid); //Este es para validar con el required de HTML5
  //console.log(input.validity);
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

const tipoDeErrores = [
  "valueMissing", //en caso el input no tenga nada
  "typeMismatch", // ejm: si es type="email" usa del html su pattern default
  "patternMismatch", // el html tiene que tener pattern y valida que se haga ese
  "customError", // error personalizado con su respectiva función personalizada
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo correo no puede estar vacío.",
    //typeMismatch: "El correo no es válido",
  },
  mensaje: {
    valueMissing: "El campo correo no puede estar vacío.",
    //typeMismatch: "El correo no es válido",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío.",
    //typeMismatch: "El correo no es válido",
    //patternMismatch: "El correo no tiene el formato correcto",
    customError: "El correo no es válido",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío.",
    patternMismatch:
      "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  },
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  // Itera a través de los tipos de errores posibles
  tipoDeErrores.forEach((error) => {
    // Verifica si el error está presente en la validación del input
    if (input.validity[error]) {
      /*console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);*/
      // Obtiene el mensaje de error correspondiente al tipo de input y error específico
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

const validadores = {
  email: (input) => validarCorreo(input),
};

function validarCorreo(input) {
  const correo = input.value;
  const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let mensaje = "";

  if(!correo){
    // Si el campo está vacío, se aplicará la validación "valueMissing" predeterminada
    input.setCustomValidity("El campo correo no puede estar vacío.");
  }else if (!regexCorreo.test(correo)) {
    mensaje = "Este correo no tiene el formato correcto";//Mensaje modal de HTML
    //input.setCustomValidity("El correo no tiene el formato correcto");
  } /*else {
    input.setCustomValidity("");
  }*/
  input.setCustomValidity(mensaje);
}
