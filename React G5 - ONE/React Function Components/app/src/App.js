import "./App.css";
import FormSingUp from "./Components/FormSignUp";
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
      <FormSingUp handleSubmit={handleSubmit}></FormSingUp>
    </Container>
  );
}

export default App;
