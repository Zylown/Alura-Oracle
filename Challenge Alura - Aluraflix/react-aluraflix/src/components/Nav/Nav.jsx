import aluraflix from "../../assets/aluraflix.svg";
import styled from "styled-components";
import { Boton } from "../Boton";
import { CloudUploadOutlined } from "@ant-design/icons";
//import "./Nav.css";
import { Link } from "react-router-dom";

const StyleNav = styled.nav`
  background-color: #000;
  display: flex;
  padding: 15px 50px; //(arriba y abajo)px (derecha y izquierda)px
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
const ContainerImg = styled.div``;

export const Nav = () => {
  return (
    <StyleNav>
      <ContainerImg>
        <img src={aluraflix} alt="Logo" />
      </ContainerImg>
      <Link to={"/newvideo"}>
        <Boton
          type={"link"}
          text={"Nuevo Video"}
          size={"large"}
          icon={<CloudUploadOutlined />}
        ></Boton>
      </Link>
    </StyleNav>
  );
};
// style={buttonStyle}
// className="btn-Ant"
//+true = 1
//+false = 0
