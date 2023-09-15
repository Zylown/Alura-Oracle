import styled from "styled-components";
import { Carrusel } from "../Carrusel";

const MainContainer = styled.main`
  padding: 30px;
  background-color: #030a1a;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Main = () => {
  return (
    <MainContainer>
      <Carrusel></Carrusel>
      <Carrusel></Carrusel>
    </MainContainer>
  );
};
