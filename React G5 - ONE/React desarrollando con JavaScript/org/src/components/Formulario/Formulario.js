import "./Formulario.css"; //add css
import CampoTexto from "../CampoTexto"; //index.js
import ListaOpciones from "../ListaOpciones"; //index.js
import Boton from "../Boton"; //index.js

/*
tarjet: es el comando que nos permite acceder a la propiedad target de un objeto event.
*/
const Formulario = () => {
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("enviado", e);
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
        ></CampoTexto>
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
        ></CampoTexto>
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
        ></CampoTexto>
        <ListaOpciones></ListaOpciones>
        <Boton></Boton>
      </form>
    </section>
  );
};

export default Formulario;
