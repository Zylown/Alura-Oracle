import "./App.css";
import FormSingUp from "./Components/FormSignUp";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center" component="h3">
        Formulario Registro
      </Typography>
      <FormSingUp></FormSingUp>
    </Container>
  );
}

export default App;
