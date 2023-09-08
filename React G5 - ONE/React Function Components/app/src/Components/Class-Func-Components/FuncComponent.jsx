import { useState } from "react";

//Funcion componente
function FuncComponent() {
  const [value, setValue] = useState(0); // sabiendo que useState devuelve un arreglo

  return (
    <div>
      Componente funcional
      <p>
        <button onClick={() => setValue(value - 1)}>-</button>
        {value}
        <button onClick={() => setValue(value + 1)}>+</button>
      </p>
    </div>
  );
}

export default FuncComponent;
