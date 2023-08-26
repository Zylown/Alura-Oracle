import { productService } from "../service/product-service.js";
console.log("Hola Product_controller");

//MOSTRAR PRODUCTOS
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

productService
  .listaProductos()
  .then((data) => {
    const productosValidos = data.filter((producto) => producto !== null); // Filtrar los elementos null
    productosValidos.forEach((elemento) => {
      const nuevaLinea = crearNuevaLinea(
        elemento.url,
        elemento.nombre,
        elemento.precio
      );
      ul.appendChild(nuevaLinea);
    });
  })
  .catch((e) => {
    console.log("Error: " + e);
  });

/*FILTRAR NOMBRE DE PRODUCTO*/

const searchInput = document.querySelector(".input__search");
const productList = document.getElementById("product__list");

const filtrarProductos = (term) => {
  productService.listaProductos().then((productos) => {
    const productosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(term.toLowerCase())
    );
    mostrarProductos(productosFiltrados);
  });
};

const mostrarProductos = (productos) => {
  productList.innerHTML = "";

  productos.forEach((producto) => {
    if (producto !== null) {
      // Filtrar los elementos null
      //console.log("Producto:", producto); // Agregar esta línea para depuración

      const productoElement = document.createElement("li");
      productoElement.innerHTML = `
      <a href="#">
        <img
          src="${producto.url}"
          alt="Producto"
          class="image--producto"
        />
      </a>
      <h3>${producto.nombre}</h3>
      <h4>$ ${producto.precio}</h4>
      <a href="#">Ver producto</a>
    `;
      productList.appendChild(productoElement);
    }
  });
};

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  filtrarProductos(searchTerm);
});

productService
  .listaProductos()
  .then((productos) => {
    mostrarProductos(productos);
  })
  .catch((error) => {
    console.log("Error nos dice: " + error);
  });
