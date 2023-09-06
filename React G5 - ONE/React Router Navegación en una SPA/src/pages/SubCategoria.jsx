import { useParams } from "react-router-dom";
import ListPosts from "../components/ListPosts/ListPosts";

const SubCategoria = () => {
  const { subcategoria } = useParams();
  return <ListPosts url={`/posts?subcategoria=${subcategoria}`}></ListPosts>;
};

export default SubCategoria;
