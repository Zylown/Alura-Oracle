import { useState } from "react";
import { v4 as uuid } from "uuid";
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
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysrm.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
    },
  ]); //1er momento no existia nada en el arreglo // Para tenerme como card default
  //con useState está a la espera de un cambio react
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      color: "#57c278",
      colorSecundario: "#d9f7e9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      color: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      color: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
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
      id: uuid(),
      titulo: "Móvil",
      color: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      color: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario); //para mostrar o ocultar formulario
  };

  //Lista de equipos

  const registrarColaborador = (colaborador) => {
    console.log("Registrando nuevo colaborador: ", colaborador);
    //spread operator = [...] está copiando algo este caso el valor de colaboradores
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar Colaborador
  //Filter nos regresa un nuevo arreglo sin modificar el original
  const eliminarColaborador = (id) => {
    console.log("Eliminando colaborador: ", id);
    const nuevosColaboradores = colaboradores.filter(
      /*La función de filtro compara el id de cada colaborador en el arreglo con id, si la compacion
      es diferente entonces lo saca del arreglo y genera un nuevo arreglo sin ese id*/
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizando color", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.color = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log("Crear equipo", nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
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
          crearEquipo={crearEquipo}
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
          actualizarColor={actualizarColor}
        ></Equipo>
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
