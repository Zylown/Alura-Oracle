const listaProductos = () =>
  //a mi respuesta le da un formato de json
  //https://alurageek-api-jade.vercel.app/producto
  fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

//http://localhost:3000/producto
const crearCliente = (url, nombre, precio, descripcion) => {
  //https://alurageek-api-jade.vercel.app/producto
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, nombre, precio, descripcion, id: uuid.v4() }),
  });
};

const eliminarProducto = (id) => {
  //https://alurageek-api-jade.vercel.app/producto
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  //https://alurageek-api-jade.vercel.app/producto
  return fetch(`http://localhost:3000/producto/${id}`)
    .then((respuesta) => respuesta.json())
    .catch((err) => console.log("Error : " + err));
};

const actualizarProducto = (url, nombre, precio, descripcion, id) => {
  //http://localhost:3000/producto
  //https://alurageek-api-jade.vercel.app/producto
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, nombre, precio, descripcion }),
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
