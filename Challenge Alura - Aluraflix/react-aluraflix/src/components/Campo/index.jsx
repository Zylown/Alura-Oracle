import { Input } from "antd";

export const Campo = (props) => {
  return (
    <Input
      placeholder={props.textPlaceholder}
      size={props.tamanio}
      className={props.clase}
      type={props.tipo}
    ></Input>
  );
};
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
