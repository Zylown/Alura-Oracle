import styled from "styled-components";
import { Campo } from "../Campo";
import { Form } from "antd";
const FormContainer = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 25px 50px 25px;
`;

export const Formulario = () => {
  return (
    <FormContainer>
      <Campo></Campo>
    </FormContainer>
  );
};
