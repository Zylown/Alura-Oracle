import "./CampoTexto.css";

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.titulo}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto;