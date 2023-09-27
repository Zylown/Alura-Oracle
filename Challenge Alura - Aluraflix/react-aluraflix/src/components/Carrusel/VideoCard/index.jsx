import React from "react";
import styled from "styled-components";

const ImagenAlura = styled.img`
  width: 424px;
  height: 247px;

  @media (max-width: 500px) {
    width: 84vw;
    height: 210px;
  }
`;

export const ImageCard = (props) => {
  return (
    <>
      <ImagenAlura
        src={props.urlV}
        alt="Imagen Alura"
        style={{ border: `${props.colorV}` }}
      ></ImagenAlura>
    </>
  );
};
/*
Acá creamos una constante que tenga estilo con styled llamada ImagenAlura y esta espera un src (la imagen)
lo cual usamos props.urlV donde viene de Carrusel.jsx donde recibirá la url del arreglo de Main.jsx
Usamos el atributo style que esta una caracteristica de css border y espera una props.color que viene de 
Carrusel.jsx donde ahi se implementará el color

{Img.map((imagen, index) => {
        <div key={index}>
          <ImagenAlura src={imagen.url}></ImagenAlura>;
        </div>;
      })}
*/
