import { productService } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    console.log("ID NULO");
  }

  const urlImagen = document.querySelector('[data-tipo="url"]');
  const nombre = document.querySelector('[data-tipo="nombre_producto"]');
  const precio = document.querySelector('[data-tipo="precio_producto"]');
  const mensaje = document.querySelector('[data-tipo="mensaje"]');

  try {
    const perfil = await productService.detalleProducto(id);

    if (
      perfil &&
      perfil !== null &&
      perfil.url &&
      perfil.nombre &&
      perfil.precio &&
      perfil.descripcion
    ) {
      urlImagen.value = perfil.url;
      nombre.value = perfil.nombre;
      precio.value = perfil.precio;
      mensaje.value = perfil.descripcion;
    } else {
      console.log("Perfil no encontrado o datos faltantes.");
    }
  } catch (error) {
    console.log("Catch error: " + error);
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const urlImagen = document.querySelector('[data-tipo="url"]').value;
  const nombre = document.querySelector('[data-tipo="nombre_producto"]').value;
  const precio = document.querySelector('[data-tipo="precio_producto"]').value;
  const mensaje = document.querySelector('[data-tipo="mensaje"]').value;

  console.log(mensaje);

  productService
    .actualizarProducto(urlImagen, nombre, precio, mensaje, id)
    .then(() => {
      window.location.href = "../screens/productos.html";
    })
    .catch((err) => {
      console.log("Error dice: " + err);
    });
});
