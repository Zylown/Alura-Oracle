//ejecutar npm run dev

import GlobalStyle from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <Header></Header>
    </>
  );
}

export default App;
