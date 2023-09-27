import { useEffect, useState } from "react";

const baseURL = "http://localhost:3000/data-carrusel";

export const listDataCarrusel = async () => {
  // const [dataCarrusel, setDataCarrusel] = useState([]);
  // useEffect(() => {
  //   fetch(baseURL)
  //     .then((respuesta) => respuesta.json())
  //     .then((data) => {
  //       setDataCarrusel(data);
  //       //console.log(data); // Puedes acceder a los datos aquí
  //     });
  // }, []);
  // return { dataCarrusel };
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};

export const createNuevoVideo = async (category) => {
  try {
    const response = await fetch(`${baseURL}/${category.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
