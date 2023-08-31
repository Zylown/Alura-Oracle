import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const [valor, setValor] = useState("");

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value); //actualizarValor es del formulario actualizarValor={actualizarNombre}
  };

  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      ></input>
    </div>
  );
};

export default CampoTexto;
