const fileContainer = document.getElementById("file__container");
const fileInput = document.getElementById("imageInput");
const errorMessage = document.querySelector(".input-message-error");

fileContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
  fileContainer.classList.add("dragover");
});

fileContainer.addEventListener("dragleave", () => {
  fileContainer.classList.remove("dragover");
});

fileContainer.addEventListener("drop", (e) => {
  e.preventDefault();
  fileContainer.classList.remove("dragover");
  fileInput.files = e.dataTransfer.files;
  updateFileName(fileInput);
});

fileInput.addEventListener("change", () => {
  updateFileName(fileInput);
});

function updateFileName(input) {
  const label = input.nextElementSibling;
  const outputHeading = input.parentElement.querySelector(".h2__drag--text");

  if (input.files.length > 0) {
    label.textContent = "Imagen seleccionada: " + input.files[0].name;
    outputHeading.textContent = "Archivo seleccionado: " + input.files[0].name;
    outputHeading.style.display = "block"; // Mostrar el elemento <h2>
    ocultarError(errorMessage); // Ocultar el mensaje de error si hay un archivo válido
  } else {
    label.textContent = "Seleccionar imagen";
    outputHeading.textContent = "";
    outputHeading.style.display = "none"; // Ocultar el elemento <h2>
    mostrarError(errorMessage, "Este campo no es válido"); // Mostrar el mensaje de error si no hay archivo
  }
}

function mostrarError(span, mensaje) {
  span.textContent = mensaje;
  span.style.display = "block"; // Mostrar el mensaje de error
  span.parentElement.classList.add("input-container--invalid"); // Agregar la clase para el estilo de error
}

function ocultarError(span) {
  span.textContent = ""; // Limpiar el mensaje de error
  span.style.display = "none"; // Ocultar el mensaje de error
  span.parentElement.classList.remove("input-container--invalid"); // Quitar la clase de estilo de error
}

// Validación adicional para mostrar error si el campo de archivo está vacío al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  if (!fileInput.value) {
    mostrarError(errorMessage, "Este campo no puede estar vacío");
  }
});
