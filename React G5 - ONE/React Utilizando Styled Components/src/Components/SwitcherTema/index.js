import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icono } from "../UI";

export default ({tema}) => {
  const claro = <Icono src={themeOn} alt="Tema Claro"></Icono>;
  const oscuro = <Icono src={themeOff} alt="Tema Oscuro"></Icono>;
  return <>{tema ? oscuro : claro}</>; // si tema existe devuelve oscuro y sino claro
};
