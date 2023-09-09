import "./App.css";
import FormSignUp from "./Components/FormSignUp";
import { Container, Typography } from "@mui/material";

function App() {
  const handleSubmit = (valores) => {
    console.log("APP.JS: ", valores);
  };
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center" component="h3">
        Formulario Registro
      </Typography>
      <FormSignUp handleSubmit={handleSubmit}></FormSignUp>
    </Container>
  );
}

export default App;
