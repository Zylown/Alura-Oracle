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
};

export default checkComplete;