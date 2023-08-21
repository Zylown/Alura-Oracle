const crearNuevaLinea = (imagen, producto, precio) => {
  const linea = document.createElement("li");
  const contenido = `
    <a href="#">
      <img
        src="${imagen}"
        alt="Producto"
        class="image--producto"
      />
    </a>
    <h3>${producto}</h3>
    <h4>$ ${precio}</h4>
    <a href="#">Ver producto</a>
  `;
  linea.innerHTML = contenido;
  return linea;
};

const ul = document.querySelector("[data-ul]");

const listaProductos = () => {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/producto"); //peticion
    http.send(); //hacemos el envio de la petición
    http.onload = () => {
      const responses = JSON.parse(http.response); //convertir la respuesta
      //para obtener un objeto y su codigo de status
      if (http.status >= 400) {
        // si es > de 400 sabemos que hubo un error
        reject(responses);
      } else {
        resolve(responses);
      }
    };
  });
  return promise;
};
listaProductos()
  .then((data) => {
    data.forEach((elemento) => {
      const nuevaLinea = crearNuevaLinea(
        elemento.url,
        elemento.nombre,
        elemento.precio
      ); //trae los datos del db.json
      ul.appendChild(nuevaLinea);
    });
    //console.log(data);
  })
  .catch((e) => {
    console.log("Error: " + e);
  });
