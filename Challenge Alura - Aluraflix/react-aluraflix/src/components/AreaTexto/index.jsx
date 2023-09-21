import { Form, Input } from "antd";
import styled from "styled-components";
const { TextArea } = Input;

const FormItem = styled(Form.Item)`
  margin: 0;
`;

export const AreaTexto = (props) => {
  return (
    <FormItem name={props.name} rules={props.rules}>
      <TextArea
        rows={4}
        placeholder={props.textPlaceholder}
        size={props.tamanio}
        className={props.clase}
        showCount={props.showCount}
        maxLength={props.maxLength}
        onChange={props.onChange}
        status={props.status}
      />
    </FormItem>
  );
};
