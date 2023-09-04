import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props; //eliminarColaborador viene de Equipo
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      ></AiFillCloseCircle>
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre}></img>
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? (
          <AiFillHeart color="red" onClick={() => like(id)}></AiFillHeart>
        ) : (
          <AiOutlineHeart onClick={() => like(id)}></AiOutlineHeart>
        )}
      </div>
    </div>
  );
};

export default Colaborador;
