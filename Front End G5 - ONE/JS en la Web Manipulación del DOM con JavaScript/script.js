const btn = document.querySelector("[data-form-btn]");
const createTask = (event) => {
    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";//Limpiar campo(input)
    //backticks
    const content = ` <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;
    list.appendChild(task);
    console.log(content);
    //console.log("Crear tarea.");
}

console.log(btn);
//Arrow function o funciones anonimas
btn.addEventListener("click", createTask);