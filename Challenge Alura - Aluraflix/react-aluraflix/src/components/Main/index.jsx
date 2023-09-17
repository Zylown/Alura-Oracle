import styled from "styled-components";
import { Carrusel } from "../Carrusel";

const MainContainer = styled.main`
  padding: 30px;
  background-color: #030a1a;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FrontEndImages = [
  {
    url: "https://img.youtube.com/vi/PztCEdIJITY/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/GJfOSoaXk4s/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/rpvrLaBQwgg/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/rpvrLaBQwgg/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/rpvrLaBQwgg/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/UuAX5azcvDQ/maxresdefault.jpg",
  },
];

const BackEndImages = [
  {
    url: "https://img.youtube.com/vi/t-iqt1b2qqk/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/FqztWwPIrKo/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/EoPvlE85XAQ/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/t-iqt1b2qqk/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/t-iqt1b2qqk/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/cLLKVd5CNLc/maxresdefault.jpg",
  },
];
const InnovacionEndImages = [
  {
    url: "https://img.youtube.com/vi/vhwspfvI52k/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/YhR7Zp8NUzE/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/6N3OkLCfK-0/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/YhR7Zp8NUzE/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/YhR7Zp8NUzE/maxresdefault.jpg",
  },
  {
    url: "https://img.youtube.com/vi/YhR7Zp8NUzE/maxresdefault.jpg",
  },
];

export const Main = () => {
  return (
    <MainContainer>
      <Carrusel
        color="#6bd1ff"
        title="Front End"
        formacion="Front End"
        imagen={FrontEndImages}
      ></Carrusel>
      <Carrusel
        color="#00C86F"
        title="Back End"
        formacion="Back End"
        imagen={BackEndImages}
      ></Carrusel>
      <Carrusel
        color="#FE8C2A"
        title="Innovación y Gestión"
        formacion="Innovación y Gestión"
        imagen={InnovacionEndImages}
      ></Carrusel>
    </MainContainer>
  );
};

/*
//Acá en Main.jsx recibe las props de Carrusel.jsx, las props son (border,color,title,formacion,imagen)
 <Carrusel
        border="2px solid #6bd1ff"
        color="#6bd1ff"
        title="Front End"
        formacion="Front End"
        imagen={FrontEndImages}
      ></Carrusel>
*/