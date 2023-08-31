import { useState } from "react";
import "./MiOrg.css";

const MiOrg = () => {
  //const [nombreVariable,funcionActualiza] = useaState(valorInicial);
  const [mostrar, actualizarMostrar] = useState(true);

  const manejarClick = () => {
    console.log("click");
    actualizarMostrar(!mostrar); //cambia el estado como un switch
  };

  return (
    <section className="orgSection">
      <h3 className="title">Mi Organización</h3>
      <img src="/img/btn_add.svg" alt="Add" onClick={manejarClick}></img>
    </section>
  );
};

export default MiOrg;
