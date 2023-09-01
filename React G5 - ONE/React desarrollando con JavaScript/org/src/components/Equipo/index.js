import "./Equipo.css";
const Equipo = (props) => {
  //Destructuracion
  const { color, colorSecundario, titulo } = props.value;

  const obj = {
    backgroundColor: colorSecundario,
  };

  const estiloTitulo = { borderBottomColor: color };
  // style={{css}}}
  return (
    <section className="equipo" style={obj}>
      <h3 style={estiloTitulo}>{titulo}</h3>
      <div className="colaboradores"></div>
    </section>
  );
};

export default Equipo;
