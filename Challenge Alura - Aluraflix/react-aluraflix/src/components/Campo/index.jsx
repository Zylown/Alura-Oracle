import React from "react";
import styled from "styled-components";
import { Input, Space } from "antd";
import { Boton } from "../Boton";
const { TextArea } = Input;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

const InputStyle = styled(Input)`
  background-color: #53585d;
  border-radius: 4px;
  border: none;
  &::placeholder {
    color: #e5e5e5;
    font-size: 15px;
  }
`;

const TextAreaStyle = styled(TextArea)`
  background-color: #53585d;
  border-radius: 4px;
  border: none;
  &::placeholder {
    color: #e5e5e5;
    font-size: 15px;
  }
`;

const ContainerBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContainerBtnLeft = styled.div`
  display: flex;
  gap: 40px;
`;

const ContainerBtnRight = styled.div``;

export const Campo = (props) => {
  return (
    <InputContainer>
      <InputStyle placeholder="Título" size="large"></InputStyle>
      <InputStyle placeholder="Link del video" size="large"></InputStyle>
      <InputStyle placeholder="Link imagen del video" size="large"></InputStyle>
      <InputStyle placeholder="Escoja una categoría" size="large"></InputStyle>
      <TextAreaStyle rows={4} placeholder="Descripción" size="large" />
      <InputStyle placeholder="Código de seguridad" size="large"></InputStyle>
      <ContainerBtn>
        <ContainerBtnLeft>
          <Boton size={"large"} text={"Guardar"} type={"primary"}></Boton>
          <Boton size={"large"} text={"Limpiar"} type={"default"}></Boton>
        </ContainerBtnLeft>
        <ContainerBtnRight>
          <Boton
            size={"large"}
            text={"Nueva Categoría"}
            type={"primary"}
          ></Boton>
        </ContainerBtnRight>
      </ContainerBtn>
    </InputContainer>
  );
};
/*
<Input placeholder="Título"></Input>
      <Input placeholder="Link del video"></Input>
      <Input placeholder="Link imagen del video"></Input>
      <Input placeholder="Escoja una categoría"></Input>
      <TextArea rows={4} placeholder="Descripción" />
*/

/*
<Form.Item label="Titulo" style={{ color: "fff !important" }}>
        <Input />
      </Form.Item>
      <Form.Item label="Titulo">
        <Input />
      </Form.Item>
      <Form.Item label="Titulo" style={{ margin: "0" }}>
        <Input />
      </Form.Item>
*/
