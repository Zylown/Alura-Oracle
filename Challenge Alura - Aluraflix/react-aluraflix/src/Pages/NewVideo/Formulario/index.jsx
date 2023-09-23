import styled from "styled-components";
import { Form, Select, message } from "antd";
import { Link } from "react-router-dom";
import { Campo, CampoSelect } from "../../../components/Campo";
import { Boton } from "../../../components/Boton";
import { AreaTexto } from "../../../components/AreaTexto";
import { listDataCarrusel } from "../../../Api/Apicito";
import { useNavigate } from "react-router-dom";
import {
  CampoAreaTexto,
  CampoCategoria,
  CampoSeguridad,
  CampoTitulo,
  CampoUrlImagen,
  CampoUrlVideo,
} from "../../../components/Validations";
//CSS
import "./Formulario.css";
import { useState } from "react";
//import { Option } from "antd/es/mentions";
const { Option } = Select;
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
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    titulo: "",
    linkVideo: "",
    linkImg: "",
    categoria: "",
    descripcion: "",
    seguridad: "",
  });
  //const navigate = useNavigate();

  const HandleOnSubmit = (e) => {
    const saveData = e;
    console.log(saveData);
    // console.log(e);
    //navigate("/success");
    message.success("Video Guardado");
  };

  const HandleOnFinishFailed = (e) => {
    console.log(e);
  };

  const HandleOnReset = (e) => {
    form.resetFields();
  };
  const { dataCarrusel } = listDataCarrusel();
  const dCat = Object.entries(dataCarrusel);
  //console.log(Object.entries(dataCarrusel)[0]);
  // console.log(Object.entries(dataCarrusel)[0][1].formacion);
  // console.log(Object.entries(dataCarrusel)[1][1].formacion);

  const onCategoryChange = (e) => {};
  return (
    <FormContainer
      form={form}
      onFinish={HandleOnSubmit}
      onFinishFailed={HandleOnFinishFailed}
      autoComplete="off"
    >
      <InputContainer>
        <Campo
          name="titulo"
          rules={CampoTitulo}
          textPlaceholder={"Título"}
          tamanio={"large"}
          clase={"custom-campo"}
          maxLength={50}
        ></Campo>
        <Campo
          name="linkVideo"
          rules={CampoUrlVideo}
          textPlaceholder={"Link del video"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
        <Campo
          name="linkImg"
          rules={CampoUrlImagen}
          textPlaceholder={"Link imagen del video"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
        <CampoSelect
          placeholder={"Ingrese una categoría"}
          clase={"custom-campo-select"}
          rules={CampoCategoria}
          name={"category"}
          tamanio="large"
        >
          {dCat.map(
            ([key, value]) => (
              // console.log(key, "valor", value),
              (<Option key={key}>{value.formacion}</Option>)
            )
          )}
        </CampoSelect>
        <AreaTexto
          name="descripcion"
          rules={CampoAreaTexto}
          textPlaceholder={"Descripción"}
          size={"large"}
          showCount={true}
          maxLength={100}
        ></AreaTexto>
        <Campo
          name="seguridad"
          rules={CampoSeguridad}
          textPlaceholder={"Código de seguridad"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
      </InputContainer>
      <ContainerBtn>
        <ContainerBtnLeft>
          <Boton
            size={"large"}
            text={"Guardar"}
            type={"primary"}
            htmlTipo={"submit"}
          ></Boton>
          <Boton
            size={"large"}
            text={"Limpiar"}
            type={"default"}
            htmlTipo={"button"}
            onClick={HandleOnReset}
          ></Boton>
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
/*
  const dataCategories = Object.values(dataCarrusel);
 {dataCategories.map((options, index) => (
      <Option key={index} value={options.formacion}>
       {options.formacion}
      </Option>
  ))} 
*/
/*
//y como haria si quiero acceder a los objetos de los videos como urlImagen?
{dCat.map(([key, value]) => (
  <div key={key}>
    <h1>{value.formacion}</h1>
    {value.videos.map((video) => (
      <img src={video.urlImagen} alt="" />
    ))}
  </div>
))}

////////////////////////////////////
{dCat.map(([key, value]) => (
              console.log(key, "valor" , value),
            <Option key={key}>{value.videos.map((video) => (<p>{video.urlImagen}</p>))}</Option>
          ))}
*/

/*
<Campo
            name="categoria"
            rules={[
              { required: true, message: "Por favor ingresa una categoría" },
            ]}
            textPlaceholder={"Escoja una categoría"}
            tamanio={"large"}
            clase={"custom-campo"}
          ></Campo>
          */
