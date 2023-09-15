//ejecutar npm run dev
//yarn run dev
//yarn dev
import GlobalStyle from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav/Nav";
import { Rodapie } from "./components/Rodapie";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Rodapie></Rodapie>
    </>
  );
}

export default App;
