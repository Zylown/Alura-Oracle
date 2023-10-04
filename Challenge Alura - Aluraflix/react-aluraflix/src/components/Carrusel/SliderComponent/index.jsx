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
  initialSlide: 0,
  vertical: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
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
