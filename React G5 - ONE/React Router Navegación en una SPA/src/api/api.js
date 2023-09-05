// Importar la biblioteca Axios
import axios from "axios";

// Crear una instancia de Axios llamada "api" con una URL base predefinida
const api = axios.create({
  baseURL: "http://localhost:5000", // Todas las peticiones van a esta URL
});

// Definir una función llamada "buscar" que realiza una solicitud GET
export const buscar = async (url, setData) => {
  // Conectarse a la URL base definida en la instancia "api" y luego...
  const respuesta = await api.get(url); // ...esperar a obtener una respuesta

  // Actualizar el estado de datos utilizando la función "setData" con los datos de la respuesta
  setData(respuesta.data); //trae todos los datos(objetos) de los arreglos
};
