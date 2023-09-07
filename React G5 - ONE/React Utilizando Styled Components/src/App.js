import React, { useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";
//EL RETO ES GUARDAR EN EL LOCALSTORAGE SI EL TEMA ÚLTIMO FUE CLARO O OSCURO
function App() {
  //const [tema, setTema] = useState(true);
  const [tema, setTema] = useState(() => {
    const temaGuardado = window.localStorage.getItem("tema");
    return temaGuardado === "true";
  });

  const setLocalStorage = (value) => {
    try {
      setTema(value);
      window.localStorage.setItem("tema", value);
    } catch (error) {
      console.log(error);
    }
  };
  /*
  const toggleTema = () => {
    setTema((tema) => !tema);
  };
*/

  const toggleTema = () => {
    const nuevoTema = !tema;
    setTema(nuevoTema); // para actualizar el estado tema en tu componente
    setLocalStorage(nuevoTema); // para guardar el nuevo tema en el localStorage para que persista entre sesiones.
    //usar setLocalStorage dentro de toggleTema para actualizar el tema y guardar el valor actual en el localStorage
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle></GlobalStyle>
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
