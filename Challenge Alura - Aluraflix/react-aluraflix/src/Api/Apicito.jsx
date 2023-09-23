import { useEffect, useState } from "react";

const baseURL = "http://localhost:3000/data-carrusel";

export const listDataCarrusel = () => {
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

export const createNuevoVideo = () => {
  useEffect(() => {
    fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo,
        linkImg,
        linkVideo,
        categoria,
        descripcion,
        id: Date.now(),
      }),
    });
  }, []);
};
