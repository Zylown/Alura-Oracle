import { useState } from "react";
import "./Formulario.css"; //add css
import CampoTexto from "../CampoTexto"; //index.js
import ListaOpciones from "../ListaOpciones"; //index.js
import Boton from "../Boton"; //index.js

/*
tarjet: es el comando que nos permite acceder a la propiedad target de un objeto event.
*/
const Formulario = () => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envio");
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
      /* O
      nombre,puesto,foto,equipo
      */
    };
    console.log(datosAEnviar);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        ></CampoTexto>
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        ></CampoTexto>
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        ></CampoTexto>
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
        ></ListaOpciones>
        <Boton></Boton>
      </form>
    </section>
  );
};

export default Formulario;
