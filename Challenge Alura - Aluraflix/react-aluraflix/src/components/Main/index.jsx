import styled from "styled-components";
import { listDataCarrusel } from "../../Api/Apicito";
import { Carrusel } from "../Carrusel";
import { useContext } from "react";
import { DataCarruselContext } from "../../Context";

const MainContainer = styled.main`
  padding: 30px;
  background-color: #030a1a;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Main = () => {
  // const { dataCarrusel } = listDataCarrusel();
  const dataCarrusel = useContext(DataCarruselContext);
  //console.log(Object.keys(dataCarrusel)); // convierte el objeto de array =>  ['FR-00', 'BA-00', 'IN-00']
  // console.log(Object.entries(dataCarrusel));
  /* convierte el objeto de array pero individual
  0: (2) ['FR-00', {…}]
  1: (2) ['BA-00', {…}]
  2: (2) ['IN-00', {…}]*/
  // console.log(Object.values(dataCarrusel)); // entra defrente a los valores de los objetos [{…}, {…}, {…}]

  //console.log(dataCarrusel);
  return (
    <MainContainer>
      {Object.keys(dataCarrusel).map((valor) => (
        <Carrusel data={valor} key={valor} />
      ))}
    </MainContainer>
  );
};
/*
//Recorriendo un objeto
{Object.entries(dataCarrusel).map((value, index) => {
        return <Carrusel key={index} data={value} />;
      })}
*/
/*
<Carrusel color="#6bd1ff" formacion="Front End" data="FR-00"/>
      <Carrusel color="#00C86F" formacion="Back End" data="BA-00"/>
      <Carrusel color="#FE8C2A" formacion="Innovación y Gestión" data="IN-00"/>

*/

/*
{dataCarrusel.map((data) => (
        <div key={data.id}>
          <Carrusel
          color="#6bd1ff"
          title="Front End"
          formacion="Front End"
          imagen={data.urlImagen}
          />
        </div>
      ))}
*/
/*
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
*/

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
