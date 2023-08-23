import { productService } from "../service/product-service.js";

const crearNuevaLinea = (imagen, producto, precio) => {
  const linea = document.createElement("li");
  const contenido = `
  <div class="container__cards--img">
  <img
    src="${imagen}"
    alt="Producto"
    class="image--producto"
  />
  <img src="../assets/img/icon_trash.svg" class="icon__trash" />
  <img src="../assets/img/icon_edit.svg" class="icon__edit" />
</div>
<h3>${producto}</h3>
<h4>${precio}</h4>
<p>#111111</p>
    `;
  linea.innerHTML = contenido;
  return linea;
};

const ul = document.querySelector("[data-ul]");

productService
  .listaProductos()
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
