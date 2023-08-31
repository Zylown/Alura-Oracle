import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Formulario from "./components/Formulario/Formulario.js";
import MiOrg from "./components/MiOrg"; //index.js
//console.log(Header);

function App() {
  //ternario --> condicion ? seMuestra : noSeMuestra
  const [mostrarFormulario, actualizarMostrar] = useState(true); //el estado inicializa en true
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };
//condicion && seMuestra [esto se llama cortocircuito]
  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario /> : <></>*/}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
    </div>
  );
}

export default App;
