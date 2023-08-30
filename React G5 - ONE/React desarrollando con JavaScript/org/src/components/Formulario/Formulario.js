import "./Formulario.css"; //add css
import CampoTexto from "../CampoTexto";//index.js

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"></CampoTexto>
        <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"></CampoTexto>
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"></CampoTexto>
      </form>
    </section>
  );
};

export default Formulario;
