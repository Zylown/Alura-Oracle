export function valida(input) {
  // Obtiene el tipo de input a través de los atributos de datos (data-*)
  const tipoDeInput = input.dataset.tipo;

  // Si hay un validador definido para el tipo de input, llámalo
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
}

/*export function valida() {
  const form = document.getElementById("nosotros__form");
  const nombreInput = document.getElementById("input__nombre");
  const mensajeTextarea = document.getElementById("mensaje");
  const exitoMessage = document.getElementById("exito__messages");
  const errorMessages = document.getElementById("error__messages");

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    // Oculta mensajes existentes
    exitoMessage.style.display = "none";
    errorMessages.style.display = "none";

    const nombre = nombreInput.value.trim();
    const mensaje = mensajeTextarea.value.trim();
    console.log(mensaje + " " + nombre);

    errorMessages.innerHTML = "";

    if (nombre === "") {
      mostrarError("Nombre no puede quedar vacío.");
    } else if (nombre.length > 40) {
      mostrarError("Nombre no puede superar los 40 caracteres.");
    }

    if (mensaje === "") {
      mostrarError("Mensaje no puede quedar vacío.");
    } else if (mensaje.length > 120) {
      mostrarError("Mensaje no puede superar los 120 caracteres.");
    }

    if (errorMessages.innerHTML === "") {
      // Si no hay errores, el formulario es válido
      console.log("Formulario válido. Puedes enviar el mensaje.");
      mostrarExito();
      form.reset();
    }
  });

  const mostrarError = (mensaje) => {
    errorMessages.style.display = "block";
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");
    errorDiv.textContent = mensaje;
    errorMessages.appendChild(errorDiv);
  };

  const mostrarExito = (mensaje) => {
    exitoMessage.style.display = "block";
  };
}

export function validaLogin() {
  const form = document.getElementById("form__login");
  const emailInput = document.querySelector("[data-input-email]");
  const passwordInput = document.querySelector("[data-input-password]");

  const exitoMessage = document.getElementById("exito__messages");
  const errorMessages = document.getElementById("error__messages");
  console.log(emailInput, passwordInput);
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    // Oculta mensajes existentes
    exitoMessage.style.display = "none";
    errorMessages.style.display = "none";

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    console.log(email + " " + password);

    errorMessages.innerHTML = "";

    if (email === "") {
      mostrarError("Email no puede quedar vacío.");
    }

    if (password === "") {
      mostrarError("Contraseña no puede quedar vacío.");
    }

    if (errorMessages.innerHTML === "") {
      // Si no hay errores, el formulario es válido
      console.log("Formulario válido. Puedes enviar el mensaje.");
      mostrarExito();
      form.reset();
    }
  });

  const mostrarError = (mensaje) => {
    errorMessages.style.display = "block";
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");
    errorDiv.textContent = mensaje;
    errorMessages.appendChild(errorDiv);
  };

  const mostrarExito = (mensaje) => {
    exitoMessage.style.display = "block";
  };
}*/
