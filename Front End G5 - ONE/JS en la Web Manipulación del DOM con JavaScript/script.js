const btn = document.querySelector("[data-form-btn]");
const createTask = (event) =>{
    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
    //console.log("Crear tarea.");
}

console.log(btn);
//Arrow function o funciones anonimas
btn.addEventListener("click", createTask);