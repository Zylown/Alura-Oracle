import React from "react"; // importa todo el módulo "react" y lo asigna a la variable "React"
import { Box, Btn } from "../UI"; //importa solo la exportación "Box" del módulo "../UI" y la asigna a la variable "Box"
import { lista } from "../../info";
import Card from "../Card";
const List = () => {
  return (
    <Box>
      {lista.cargos.map((cargo, i) => {
        return <Card key={i} cargo={cargo}></Card>;
      })}
      <Btn>Ver más</Btn>
    </Box>
  );
};

export default List;
