// Importar la biblioteca Axios
import axios from "axios";
/*
Axios es una biblioteca de JavaScript que se utiliza para realizar solicitudes HTTP desde aplicaciones web o Node.js. Su principal función es facilitar la comunicación entre una aplicación y un servidor web o una API. Algunos de los usos comunes de Axios incluyen:
Solicitudes HTTP:
Consumo de API
Manejo de Promesas
Intercepción de solicitudes y respuestas:
Gestión de encabezados y configuración:
Autenticación
Manejo de errores
*/
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
