// Importamos React y los hooks necesarios
import React, { useEffect, useState } from "react";

// Definimos la URL base de nuestra API
const baseURL = "http://localhost:3000";

// Creamos un componente funcional de React
export const Api = () => {
  // Usamos el hook useState para manejar el estado de los datos que obtenemos de la API
  const [data, setData] = useState(null);

  // Usamos el hook useEffect para realizar acciones después de que se renderiza nuestro componente
  useEffect(() => {
    // Definimos una función asíncrona para obtener los datos de la API
    const fetchData = async () => {
      try {
        // Hacemos una solicitud GET a la API
        const respuesta = await fetch(`${baseURL}/frontImages`);

        // Si la respuesta no es exitosa, lanzamos un error
        if (!respuesta.ok) {
          throw new Error(`HTTP error: ${respuesta.status}`);
        }

        // Convertimos la respuesta a JSON
        const data = await respuesta.json();

        // Actualizamos el estado de los datos con los datos que obtuvimos
        setData(data);
      } catch (error) {
        // Si ocurre un error, lo registramos en la consola
        console.error("Error: ", error);
      }
    };

    // Llamamos a nuestra función para obtener los datos
    fetchData();
  }, []); // Pasamos un array vacío como segundo argumento para que useEffect solo se ejecute una vez

  // Renderizamos nuestro componente
  return (
    <div>
      <h1>Datos de la API</h1>
      {/* Si tenemos datos, los mostramos. Si no, mostramos un mensaje de carga */}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};
/*
JSON.stringify(data, null, 2): Esta es una función de JavaScript que convierte un objeto JavaScript (data) en una cadena JSON. Los dos argumentos adicionales (null y 2) se utilizan para formatear la salida. El valor null significa que todas las propiedades del objeto se incluirán en la cadena JSON. El valor 2 indica que se deben agregar dos espacios de sangría para cada nivel en la estructura de datos.
*/
