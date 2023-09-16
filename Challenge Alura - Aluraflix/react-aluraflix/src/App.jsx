//ejecutar npm run dev
//yarn run dev
//yarn dev
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Page404 } from "./Pages/Page404";
import { Nav } from "./components/Nav/Nav";
import { Rodapie } from "./components/Rodapie";
import { NewVideo } from "./Pages/NewVideo";
function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/newvideo" element={<NewVideo />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Rodapie></Rodapie>
    </>
  );
}

export default App;

/*
<Header></Header>
      <Main></Main>
      <Rodapie></Rodapie>
*/
