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

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`)
    .then((respuesta) => respuesta.json())
    .catch((err) => console.log("Error : " + err));
};

const actualizarProducto = (url, nombre, precio, descripcion, id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({url, nombre, precio, descripcion}),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const productService = {
  listaProductos,
  crearCliente,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};
