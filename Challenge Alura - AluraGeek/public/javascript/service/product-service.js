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
const crearProducto = (url, nombre, precio, descripcion) => {
  // Realizar el POST para crear el cliente sin el ID
  return fetch(
    "https://alurageek-a13d2-default-rtdb.firebaseio.com/producto.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, nombre, precio, descripcion }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const nuevoId = data.name; // Obtener el ID generado por Firebase

      // Realizar un PUT para actualizar el ID del cliente con el ID de Firebase
      return fetch(
        `https://alurageek-a13d2-default-rtdb.firebaseio.com/producto/${nuevoId}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url,
            nombre,
            precio,
            descripcion,
            id: nuevoId,
          }),
        }
      ).then((respuesta) => {
        if (respuesta.ok) {
          return nuevoId;
        } else {
          throw new Error("Error al actualizar el ID del cliente");
        }
      });
    });
};

const eliminarProducto = (id) => {
  //https://alurageek-api-jade.vercel.app/producto
  return fetch(
    `https://alurageek-a13d2-default-rtdb.firebaseio.com/producto/${id}.json`,
    {
      method: "DELETE",
    }
  );
};

const detalleProducto = (id) => {
  return fetch(
    `https://alurageek-a13d2-default-rtdb.firebaseio.com/producto/${id}.json`
  )
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error al obtener los detalles del producto");
      }
      return respuesta.json(); // Convertir la respuesta a JSON
    })
    .then((data) => {
      if (data === null) {
        throw new Error("El producto no existe");
      }
      return data; // Devolver los detalles del producto
    })
    .catch((err) => console.log("Error : " + err));
};

const actualizarProducto = (url, nombre, precio, descripcion, id) => {
  return fetch(
    `https://alurageek-a13d2-default-rtdb.firebaseio.com/producto/${id}.json`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, nombre, precio, descripcion, id }), // Incluir el ID en el cuerpo
    }
  )
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error al actualizar el producto");
      }
      return respuesta.json(); // Convertir la respuesta a JSON
    })
    .then((data) => data) // Devolver los datos actualizados
    .catch((err) => console.log(err));
};

export const productService = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};
