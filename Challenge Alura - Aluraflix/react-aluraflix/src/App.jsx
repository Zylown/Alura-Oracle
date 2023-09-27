//ejecutar npm run dev
//yarn run dev
//yarn dev
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Page404 } from "./Pages/Page404";
import { Nav } from "./components/Nav/Nav";
import { Rodapie } from "./components/Rodapie";
import { NewVideo } from "./Pages/NewVideo";
import { NewCategory } from "./Pages/NewCategory";
// import { Success } from "./Pages/Success";
import { listDataCarrusel } from "./Api/Apicito";
import { DataCarruselContext } from "./Context";

function App() {
  // const { dataCarrusel } = listDataCarrusel();
  const [dataCarrusel, setDataCarrusel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await listDataCarrusel();
      setDataCarrusel(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <DataCarruselContext.Provider value={dataCarrusel}>
        <Nav></Nav>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/newvideo" element={<NewVideo />}></Route>
          <Route path="/newcategory" element={<NewCategory />}></Route>
          {/* <Route path="/success" element={<Success />}></Route> */}
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        <Rodapie></Rodapie>
      </DataCarruselContext.Provider>
    </>
  );
}

export default App;

/*
<Header></Header>
      <Main></Main>
      <Rodapie></Rodapie>
*/
