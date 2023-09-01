import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Formulario from "./components/Formulario/Formulario.js";
import MiOrg from "./components/MiOrg"; //index.js
import Equipo from "./components/Equipo"; //index.js
//console.log(Header);

function App() {
  //ternario --> condicion ? seMuestra : noSeMuestra
  const [mostrarFormulario, actualizarMostrar] = useState(false); //el estado inicializa en true
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario); //para mostrar o ocultar formulario
  };

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      color: "#57c278",
      colorSecundario: "#d9f7e9",
    },
    {
      titulo: "Front End",
      color: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      color: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      color: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      color: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      color: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      color: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

  //condicion && seMuestra [esto se llama cortocircuito] -> {mostrarFormulario && <Formulario />}
  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario /> : <></>*/}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      {equipos.map((equipo, index) => (
        <Equipo key={index} value={equipo}></Equipo>
      ))}
      ;
    </div>
  );
}

export default App;
