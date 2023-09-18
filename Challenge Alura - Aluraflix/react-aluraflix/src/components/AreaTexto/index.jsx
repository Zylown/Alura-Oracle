import { Input } from "antd";
const { TextArea } = Input;

export const AreaTexto = (props) => {
  return (
    <TextArea
      rows={4}
      placeholder={props.textPlaceholder}
      size={props.tamanio}
      className={props.clase}
    />
  );
};
