(() => {
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
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);//significa que sea implementado siempre al final del nodo
    //console.log("Crear tarea.");
  }
  //Arrow function o funciones anonimas
  btn.addEventListener("click", createTask);

  const checkComplete = () => {
    const i = document.createElement("i");//Aca va el tipo de elemento(este caso = i)
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  }

  const completeTask = (event) => {
    const element = event.target;
    //toggle verifica si existe o no la clase
    element.classList.toggle("fas");
    element.classList.toggle("complete-icon");
    element.classList.toggle("far");
  }
})();