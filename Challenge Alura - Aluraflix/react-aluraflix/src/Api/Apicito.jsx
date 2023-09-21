import { useEffect, useState } from "react";

export const useApicito = () => {
  const baseURL = "http://localhost:3000/data-carrusel";

  const [dataCarrusel, setDataCarrusel] = useState([]);

    useEffect(() => {
    fetch(baseURL)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setDataCarrusel(data);
        //console.log(data); // Puedes acceder a los datos aquí
      });
  }, []);
  return { dataCarrusel };
};
