import aluraflix from "../../assets/aluraflix.svg";
import styled from "styled-components";
import { Button, Space } from "antd";
//import "./Nav.css";
import { CloudUploadOutlined } from "@ant-design/icons";

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

const AntBtnGhostDefault = styled(Button)`
  /* .btn-Ant {
    color: red;
    background-color: red ;
  }
  .btn-Ant:hover {
    background-color: yellow !important;
  } */
  && {
    border: 2px solid white;
    font-weight: 600;
    &:hover {
      color: #c2c2c2 !important;
      border: 2px solid #c2c2c2 !important;
    }
    @media (max-width: 480px) {
      display: none;
    }
  }
`;
export const Nav = () => {
  return (
    <StyleNav>
      <ContainerImg>
        <img src={aluraflix} alt="Logo" />
      </ContainerImg>
      <Space className="site-button-ghost-wrapper" wrap>
        <AntBtnGhostDefault size="large" ghost icon={<CloudUploadOutlined />}>
          Nuevo Video
        </AntBtnGhostDefault>
      </Space>
    </StyleNav>
  );
};
// style={buttonStyle}
// className="btn-Ant"
//+true = 1
//+false = 0
