console.log("Hola Product_service");
const listaProductos = () =>
  fetch("https://alurageek-a13d2-default-rtdb.firebaseio.com/producto.json")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      // Verificar si la respuesta es un objeto y convertirlo a un array
      if (data && typeof data === "object") {
        return Object.values(data);
      } else {
        return []; // Devolver un array vacío si no hay datos
      }
    })
    .catch((err) => {
      console.log("Error al obtener los datos: " + err);
    });

//http://localhost:3000/producto
const crearCliente = (url, nombre, precio, descripcion) => {
  //https://alurageek-api-jade.vercel.app/producto
  return fetch("https://alurageek-a13d2-default-rtdb.firebaseio.com/producto.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, nombre, precio, descripcion, id: uuid.v4() }),
  });
};

const eliminarProducto = (id) => {
  //https://alurageek-api-jade.vercel.app/producto
  return fetch(`https://alurageek-a13d2-default-rtdb.firebaseio.com/producto/${id}.json`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  //https://alurageek-api-jade.vercel.app/producto
  return fetch(`https://alurageek-a13d2-default-rtdb.firebaseio.com/producto${id}.json`)
    .then((respuesta) => respuesta.json())
    .catch((err) => console.log("Error : " + err));
};

const actualizarProducto = (url, nombre, precio, descripcion, id) => {
  //http://localhost:3000/producto
  //https://alurageek-api-jade.vercel.app/producto
  return fetch(`https://alurageek-a13d2-default-rtdb.firebaseio.com/producto/${id}.json`, {
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
