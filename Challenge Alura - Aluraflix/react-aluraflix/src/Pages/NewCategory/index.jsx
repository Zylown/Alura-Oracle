import styled from "styled-components";
import { Formulario } from "./Formulario";

const ContainerVideo = styled.div`
  background-color: #191919;
  h1 {
    padding: 50px;
    color: #fff;
    text-align: center;
    margin: 0;
  }
`;

export const NewCategory = () => {
  return (
    <ContainerVideo>
      <h1>Nueva Categoría</h1>
      <Formulario></Formulario>
    </ContainerVideo>
  );
};
