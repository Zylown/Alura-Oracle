const listaProductos = () =>
  //a mi respuesta le da un formato de json
  fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const crearCliente = (url, nombre, precio, descripcion) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, nombre, precio, descripcion, id: uuid.v4() }),
  });
};

export const productService = {
  listaProductos,
  crearCliente,
};
