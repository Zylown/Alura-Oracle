import styled from "styled-components";
import { Button, Space } from "antd";

const AntButton = styled(Button)`
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
    color: white;
    &:hover {
      color: #c2c2c2 !important;
      border: 2px solid #c2c2c2 !important;
    }
    @media (max-width: 480px) {
      display: none;
    }
  }
`;

export const Boton = ({ text,icon,size,type }) => {
  return (
    <Space className="site-button-ghost-wrapper" wrap>
      <AntButton size={size} type={type} icon={icon}>
        {text}
      </AntButton>
    </Space>
  );
};
