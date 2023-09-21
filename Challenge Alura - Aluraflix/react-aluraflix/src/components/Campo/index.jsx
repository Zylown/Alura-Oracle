import { Form, Input } from 'antd';
import styled from 'styled-components';

const FormItem = styled(Form.Item)`
  margin: 0;
`

export const Campo = ({ name, rules, textPlaceholder, tamanio, clase, tipo, status }) => {
  return (
    <FormItem name={name} rules={rules}>
      <Input placeholder={textPlaceholder} size={tamanio} className={clase} type={tipo} status={status} />
    </FormItem>
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
