import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Formulario from "./components/Formulario/Formulario.js";
import MiOrg from "./components/MiOrg"; //index.js
import Equipo from "./components/Equipo"; //index.js
import Footer from "./components/Footer";
//console.log(Header);

function App() {
  //ternario --> condicion ? seMuestra : noSeMuestra
  const [mostrarFormulario, actualizarMostrar] = useState(false); //el estado inicializa en true
  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
    },
    {
      equipo: "Programación",
      foto: "https://github.com/genesysrm.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
    },
    {
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
    },
    {
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
    },
    {
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
    },
  ]); //1er momento no existia nada en el arreglo // Para tenerme como card default

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

  const registrarColaborador = (colaborador) => {
    console.log("Registrando nuevo colaborador: ", colaborador);
    //spread operator = [...] está copiando algo este caso el valor de colaboradores
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminando colaborador: ", id);
  };

  //condicion && seMuestra [esto se llama cortocircuito] -> {mostrarFormulario && <Formulario />}
  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario /> : <></>*/}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      {equipos.map((equipo, index) => (
        <Equipo
          key={index}
          value={equipo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          //cualquiernombre de la props = {nombre de la funcion}
          eliminarColaborador={eliminarColaborador}
        ></Equipo>
      ))}
      ;<Footer></Footer>
    </div>
  );
}

export default App;
