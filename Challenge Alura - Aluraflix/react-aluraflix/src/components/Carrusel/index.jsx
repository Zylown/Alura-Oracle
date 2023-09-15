import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import I1 from "../../assets/imgAlura/1.jpg";
import I2 from "../../assets/imgAlura/2.jpg";
import styled from "styled-components";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const ImagenAlura = styled.img`
  width: 424px;
  height: 247px;
`;

const EspecialidadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  //flex-direction: column;
  h1 {
    margin: 0;
    background: #6bd1ff;
    border: none;
    border-radius: 3px;
    padding: 12px 22px;
    font-size: 25px;
  }
`;

export const Carrusel = () => {
  const [Img, setImg] = useState([I1, I1, I1, I1, I2]);
  return (
    <>
      <EspecialidadContainer>
        <h1>Front End</h1>
        <p>Formación Front End de Alura Latam</p>
      </EspecialidadContainer>
      <Slider {...settings}>
        {Img.map((image, index) => (
          <div key={index}>
            <ImagenAlura src={image}></ImagenAlura>
          </div>
        ))}
      </Slider>
    </>
  );
};

/*
 <div>
          <ImagenAlura src={I1}></ImagenAlura>
        </div>
        <div>
          <ImagenAlura src={I1}></ImagenAlura>
        </div>
        <div>
          <ImagenAlura src={I1}></ImagenAlura>
        </div>
        <div>
          <ImagenAlura src={I1}></ImagenAlura>
        </div>
        <div>
          <ImagenAlura src={I2}></ImagenAlura>
        </div>
*/
