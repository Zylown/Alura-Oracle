import styled from "styled-components";
import { ImageCard } from "./VideoCard";
import { SliderComponent } from "./SliderComponent";

// const ImagenAlura = styled.img`
//   width: 450px;
//   height: 247px;
// `;

const EspecialidadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 9px;
  //flex-direction: column;
  h1 {
    margin: 0;
    //    background: #6bd1ff;
    border: none;
    border-radius: 3px;
    padding: 12px 22px;
    font-size: 25px;
  }
`;

const SliderContainer = styled.div`
  padding: 10px;
`;

export const Carrusel = (props) => {
  return (
    <>
      <EspecialidadContainer>
        <h1 style={{ backgroundColor: `${props.color}` }}>{props.title}</h1>
        <p>Formación {props.formacion} de Alura Latam</p>
      </EspecialidadContainer>
      <SliderContainer>
        <SliderComponent>
          {props.imagen.map((imagen, index) => {
            return (
              <div key={index}>
                <ImageCard
                  colorV={`2px solid ${props.color}`}
                  urlV={imagen.url}
                ></ImageCard>
              </div>
            );
          })}
        </SliderComponent>
      </SliderContainer>
    </>
  );
};

/*
En el codigo ese h1 usa la propiedad style para que cambie el fondo con backgroundColor y manda la
props.color que se va usar este caso se una en Main.jsx al igual que el titulo y en formación
Cuando usamos ese <SliderComponent> acepta todo lo que está adentro ya que en el componente
<SliderComponent> está como props.children o sea que va aceptar todo lo que esté dentro.
En el arreglo props.imagen.map , es porque llama a una props llamada imagen que está en Main.jsx donde 
ahi está esperando el arreglo{FrontEndImages y BackEndImages} para ser recorrido. Lo cual esto
nos retorna un div contenedor con su key={index} y a dentro es la imagen que este es un componente
<VideoCard>, este VideoCard tiene una props llamada colorV que viene de VideoCard.jsx ydentro tiene 2px solid
y espera el color del props la cual es usada en Main.jsx osea la misma del h1. Esto es  para que tenga el mismo
color del borde que el h1.
Otra props llamada urlV que en esta es creada en el componente VideoCard "(src={props.urlV})" el cual espera
la url del arreglo de Main.jsx, como es un arreglo y dentro un objeto. Entonces entra en url para accedera ello
*/
