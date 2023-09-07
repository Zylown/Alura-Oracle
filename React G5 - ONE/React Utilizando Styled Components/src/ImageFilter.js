import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { Icono, IconoTema } from "./Components/UI";

export default (type) => {
  //console.log(type);
  const Images = {
    Restaurante: <IconoTema src={alimentacion} alt="Restaurant"></IconoTema>,
    Salud: <IconoTema src={salud} alt="salud"></IconoTema>,
    Transporte: <IconoTema src={transporte} alt="transporte"></IconoTema>,
    Utilidades: <IconoTema src={utilidades} alt="utilidades"></IconoTema>,
    default: <IconoTema src={otros} alt="otros"></IconoTema>,
  };
  return Images[type] || Images["default"]; //accede al objeto dependiendo el type
};
