import styled from "styled-components";
import aluraflix from "../../assets/aluraflix.png";

const FooterContainer = styled.footer`
  background-color: #030a1a;
  border-top: 3px solid #257be5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  //padding: 15px 0px;
  padding-top: 15px;
  img {
    width: 250px;
    height: 65px;
  }
  p {
    color: white;
    margin: 10px;
  }
`;

export const Rodapie = () => {
  return (
    <FooterContainer>
      <img src={aluraflix} alt="Logo" />
      <p>Site made by Sevastian Caballero Hoyos</p>
    </FooterContainer>
  );
};
