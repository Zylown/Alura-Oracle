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
  /*
  console.log(colaboradores.length); //Esto te dice el num de colaboradores
  console.log(
    colaboradores.length > 0
  ); /*Esto te dice si el num de colaboradores es mayor a 0 es true, osea que si hay colaboradores*/
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={color}
              ></Colaborador>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
