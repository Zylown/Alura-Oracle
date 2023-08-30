import "./ListaOpciones.css";

const ListaOpciones = () => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  /*
  {equipos.map((equipo, index) => { ... })}: Aquí se utiliza el método map para recorrer cada elemento del arreglo equipos y ejecutar una función de flecha por cada elemento. Esta función de flecha toma dos argumentos: equipo y index. El equipo es el valor actual del arreglo en la iteración, y el index es la posición del elemento en el arreglo.

  <option key={index}>{equipo}</option>: Dentro de la función de flecha, se crea un elemento <option> para cada equipo. Se establece el atributo key en el índice del elemento para ayudar a React a identificar cada opción de manera única. El contenido de la opción ({equipo}) es simplemente el nombre del equipo que se está iterando.
  */

  return (
    <div className="lista-opciones">
      <label>Equipo</label>
      <select>
        {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)};
      </select>
    </div>
  );
};

export default ListaOpciones;
