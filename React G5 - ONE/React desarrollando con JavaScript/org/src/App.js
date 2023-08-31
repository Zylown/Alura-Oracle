import "./App.css";
import Header from "./components/Header/Header.js";
import Formulario from "./components/Formulario/Formulario.js";
import MiOrg from "./components/MiOrg";//index.js
//console.log(Header);

function App() {
  return (
    <div>
      <Header />
      <Formulario/>
      <MiOrg></MiOrg>
    </div>
  );
}

export default App;
