import styled from "styled-components";
import { Form } from "antd";
import { Link } from "react-router-dom";
import { Campo } from "../../../components/Campo";
import { Boton } from "../../../components/Boton";
import { AreaTexto } from "../../../components/AreaTexto";
//const { TextArea } = Input;
//CSS
import "./Formulario.css";

const FormContainer = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 0px 25px 50px 25px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 430px) {
    /* Cuando la pantalla sea más pequeña que 430px */
    flex-direction: column; /* Cambia a diseño de columna */
  }
`;

const ContainerBtnLeft = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 430px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const ContainerBtnRight = styled.div`
  @media (max-width: 430px) {
    display: none;
  }
`;

export const Formulario = () => {
  return (
    <FormContainer>
      <InputContainer>
        <Campo
          textPlaceholder={"Título"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
        <Campo
          textPlaceholder={"Link del video"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
        <Campo
          textPlaceholder={"Link imagen del video"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
        <Campo
          textPlaceholder={"Escoja una categoría"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
        <AreaTexto
          textPlaceholder={"Descripción"}
          size={"large"}
          showCount={true}
          maxLength={100}
        ></AreaTexto>
        <Campo
          textPlaceholder={"Código de seguridad"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
      </InputContainer>
      <ContainerBtn>
        <ContainerBtnLeft>
          <Boton size={"large"} text={"Guardar"} type={"primary"}></Boton>
          <Boton size={"large"} text={"Limpiar"} type={"default"}></Boton>
        </ContainerBtnLeft>
        <ContainerBtnRight>
          <Link to={"/newcategory"}>
            <Boton
              size={"large"}
              text={"Nueva Categoría"}
              type={"primary"}
            ></Boton>
          </Link>
        </ContainerBtnRight>
      </ContainerBtn>
    </FormContainer>
  );
};
