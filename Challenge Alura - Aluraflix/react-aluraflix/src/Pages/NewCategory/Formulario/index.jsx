import styled from "styled-components";
import { Form, Input } from "antd";
import { Boton } from "../../../components/Boton";
import { Campo } from "../../../components/Campo";
import { AreaTexto } from "../../../components/AreaTexto";
import { Tabla } from "../../../components/Tabla";
//import "./Formulario.css" // css ya importado en NewVideo

const FormContainer = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 0px 25px 50px 25px;
  color: white;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: start;
  gap: 40px;
  align-items: center;
  @media (max-width: 430px) {
    justify-content: space-between;
  }
`;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};

export const Formulario = () => {
  return (
    <FormContainer>
      <InputContainer>
        <Campo
          textPlaceholder={"Título"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
        <AreaTexto
          textPlaceholder={
            "Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente"
          }
          size={"large"}
          showCount={true}
          maxLength={"100"}
          onChange={onChange}
        ></AreaTexto>
        <Campo tipo={"color"} tamanio={"large"} clase={"custom-campo"}></Campo>
        <Campo
          textPlaceholder={"Código de seguridad"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
        <ContainerBtn>
          <Boton size={"large"} text={"Guardar"} type={"primary"}></Boton>
          <Boton size={"large"} text={"Limpiar"} type={"default"}></Boton>
        </ContainerBtn>
      </InputContainer>
      <Tabla></Tabla>
    </FormContainer>
  );
};
