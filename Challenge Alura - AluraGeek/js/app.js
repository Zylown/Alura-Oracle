// Importa la función 'valida' desde el archivo './validaciones.js'
import { valida } from "./validaciones.js";

// Selecciona todos los elementos <input> en el documento
const inputs = document.querySelectorAll("input, textarea"); //selecciona  todos los elementos tipo input

// Itera a través de cada elemento <input> seleccionado
inputs.forEach((input) => {
  // Agrega un evento de escucha para el evento 'blur' (cuando el input pierde el foco)
  input.addEventListener("blur", (input) => {
    // Llama a la función 'valida' y pasa el elemento <input> que desencadenó el evento 'blur'
    valida(input.target); //cuando los saque de foco va llamar a esta funcion
  });
});