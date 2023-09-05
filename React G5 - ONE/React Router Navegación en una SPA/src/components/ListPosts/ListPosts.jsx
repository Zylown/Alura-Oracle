import { useState, useEffect } from "react"; //useEffect para realizar una acción cuando el componente se monta y cuando la variable url cambia
import "../../assets/css/componentes/card.css";
import { buscar } from "../../api/api";
import { Link } from "react-router-dom";

const ListPosts = ({ url }) => {
  //url es la prop que viene de Home.jsx

  const [posts, setPosts] = useState([]);
  //inicializa posts con un arreglo vacío, Este arreglo se utilizará para almacenar las publicaciones obtenidas de la API.

  // Utilizar el hook useEffect para realizar una acción cuando el componente se monta o cuando "url" cambia
  useEffect(() => {
    buscar(url, setPosts);
    /*
    llama a la función buscar con la URL y la función setPosts como argumentos. Esto significa que cuando la URL cambie, se realizará una solicitud HTTP utilizando la función buscar y los datos de respuesta se actualizarán en la variable de estado posts.
    */
  }, [url]);

  return (
    <section className="posts container">
      {posts.map((post) => {
        const { id, title, metadescription, categoria } = post; //destructurar, es la info de db.json
        return (
          <Link
            to={`/posts/${id}`}
            className={`post__card post-card--${categoria}`}
            key={id}
          >
            <article>
              <h3 className="post-card__title">{title}</h3>
              <p className="post-card__meta">{metadescription}</p>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default ListPosts; // Exportar el componente para su uso en otros lugares
