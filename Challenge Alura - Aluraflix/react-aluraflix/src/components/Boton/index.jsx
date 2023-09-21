import { Button, Space } from "antd";

export const Boton = ({
  text,
  icon,
  size,
  type,
  estilo,
  htmlTipo,
  onClick,
}) => {
  return (
    <Space className="site-button-ghost-wrapper" wrap>
      <Button
        size={size}
        type={type}
        icon={icon}
        className={estilo}
        htmlType={htmlTipo}
        onClick={onClick}
      >
        {text}
      </Button>
    </Space>
  );
};
/*
//Con Props
export const Boton = (props) => {
  return (
    <Space className="site-button-ghost-wrapper" wrap>
      <AntButton size={props.size} type={props.types} icon={props.icon}>
        {props.text}
      </AntButton>
    </Space>
  );
};

//El nav que recibe:
export const Nav = () => {
  return (
    <StyleNav>
      <ContainerImg>
        <img src={aluraflix} alt="Logo" />
      </ContainerImg>
      <Link to={"/newvideo"}>
        <Boton
          types={"link"}
          text={"Nuevo Video"}
          size={"large"}
          icon={<CloudUploadOutlined />}
        ></Boton>
      </Link>
    </StyleNav>
  );
};
*/
