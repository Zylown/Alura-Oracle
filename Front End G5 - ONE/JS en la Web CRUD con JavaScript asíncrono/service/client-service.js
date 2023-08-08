const crearNuevaLinea = (nombre,email) => {
    const linea = document.createElement("tr")
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`
        linea.innerHTML = contenido;
        return linea;
};

const table = document.querySelector("[data-table]");

const htpp = new XMLHttpRequest();
htpp.open("GET", "http://localhost:3000/perfil");

htpp.send();
htpp.onload = () => {
    const data = JSON.parse(htpp.response) ;
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
    console.log(data);
    const http2 = new XMLHttpRequest();
    http2.open('GET',"http://localhost:3000/perfil/hoy");
    http2.send();
    http2.onload = () =>{
        const data2 = JSON.parse(http2.response);
    }
};