const listaProductos = () =>
  //a mi respuesta le da un formato de json
  fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

export const productService = {
  listaProductos,
};
