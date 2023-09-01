import "./Equipo.css";
import Colaborador from "../Colaborador"; //index.js

const Equipo = (props) => {
  //Destructuracion
  const { color, colorSecundario, titulo } = props.value;
  const { colaboradores } = props;

  const obj = {
    backgroundColor: colorSecundario,
  };

  const estiloTitulo = { borderBottomColor: color };
  // style={{css}}}
  return (
    <section className="equipo" style={obj}>
      <h3 style={estiloTitulo}>{titulo}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador,index) => (
          <Colaborador datos={colaborador} key={index}></Colaborador>
        ))}
      </div>
    </section>
  );
};

export default Equipo;
