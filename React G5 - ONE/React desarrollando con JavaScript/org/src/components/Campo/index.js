import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
  //Destructuracion
  const { type = "text" } = props;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value); //actualizarValor es del formulario actualizarValor={actualizarNombre}
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      ></input>
    </div>
  );
};

export default Campo;
