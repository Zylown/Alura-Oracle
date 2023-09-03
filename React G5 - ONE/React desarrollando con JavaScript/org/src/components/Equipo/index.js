import "./Equipo.css";
import Colaborador from "../Colaborador"; //index.js
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuracion
  const { color, colorSecundario, titulo, id } = props.value;
  const { colaboradores, eliminarColaborador, actualizarColor } = props; //eliminarColaborador viene de App.js

  const obj = {
    backgroundColor: hexToRgba(color, 0.6),
  };

  const estiloTitulo = { borderBottomColor: color };
  // style={{css}}}
  /*
  console.log(colaboradores.length); //Esto te dice el num de colaboradores
  console.log(
    colaboradores.length > 0
  ); /*Esto te dice si el num de colaboradores es mayor a 0 es true, osea que si hay colaboradores*/
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input
            type="color"
            value={color}
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          ></input>
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={color}
                eliminarColaborador={eliminarColaborador}
              ></Colaborador>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
