import "./ListaOpciones.css";

const ListaOpciones = (props) => {

  /*
  {equipos.map((equipo, index) => { ... })}: Aquí se utiliza el método map para recorrer cada elemento del arreglo equipos y ejecutar una función de flecha por cada elemento. Esta función de flecha toma dos argumentos: equipo y index. El equipo es el valor actual del arreglo en la iteración, y el index es la posición del elemento en el arreglo.

  <option key={index}>{equipo}</option>: Dentro de la función de flecha, se crea un elemento <option> para cada equipo. Se establece el atributo key en el índice del elemento para ayudar a React a identificar cada opción de manera única. El contenido de la opción ({equipo}) es simplemente el nombre del equipo que se está iterando.
  */
  //<select value={props.valor}> viene del Formulario valor

  const manejarCambio = (e) => {
    //console.log("cambio", e.target.value);
    props.actualizarEquipo(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipo</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
        ;
      </select>
    </div>
  );
};

export default ListaOpciones;
