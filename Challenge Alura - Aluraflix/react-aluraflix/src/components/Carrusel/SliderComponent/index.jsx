import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

export const SliderComponent = (props) => {
  return <Slider {...settings}>{props.children}</Slider>;
};
/*
return <Slider {...settings}>{props.children}</Slider>;
[Detalle:]
El props.children significa que acepta todo lo que esté dentro cuando sea USADO,por ejemplo
el componente <SliderComponent> Lo usan en Carrusel.jsx entonces todo lo que esté
dentro de ese <SliderComponent> lo recibirá.
*/
