import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");//selecciona  todos los elementos tipo input

inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);//cuando los saque de foco va llamar a esta funcion
    });
});