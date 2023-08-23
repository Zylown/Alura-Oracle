import { productService } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = document.querySelector('[data-tipo="url"]').value;
  //const categoria = document.querySelector('[data-tipo="categoria"]').value;
  const nombre = document.querySelector('[data-tipo="nombre_producto"]').value;
  const precio = document.querySelector('[data-tipo="precio_producto"]').value;
  const mensaje = document.querySelector('[data-tipo="mensaje"]').value;
  productService
    .crearCliente(url, nombre, precio, mensaje)
    .then((result) => {
      console.log("Producto agregado correctamente: " + result);
    })
    .catch((err) => {
      console.log("Error dice: " + err);
    });
});
