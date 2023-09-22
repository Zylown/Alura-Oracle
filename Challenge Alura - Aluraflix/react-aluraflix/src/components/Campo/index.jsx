import { Form, Input, Select } from "antd";
import styled from "styled-components";

const FormItem = styled(Form.Item)`
  margin: 0;
`;

export const Campo = ({
  name,
  rules,
  textPlaceholder,
  tamanio,
  clase,
  tipo,
  status,
  maxLength,
}) => {
  return (
    <FormItem name={name} rules={rules}>
      <Input
        placeholder={textPlaceholder}
        size={tamanio}
        className={clase}
        type={tipo}
        status={status}
        maxLength={maxLength}
      />
    </FormItem>
  );
};

export const CampoSelect = ({
  name,
  rules,
  opciones,
  defaultValue,
  initialValue,
  placeholder,
  clase,
  tamanio,
}) => {
  return (
    <FormItem
      name={name}
      rules={rules}
      initialValue={initialValue}
      className={clase}
    >
      <Select
        options={opciones}
        defaultValue={defaultValue}
        size={tamanio}
        dropdownStyle={{ backgroundColor: "#ccc" }}
        placeholder={placeholder}
      ></Select>
    </FormItem>
  );
};

/*
// dropdownStyle={{backgroundColor:"red"}}
//  validateStatus='error' help="Error pe mano"
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
