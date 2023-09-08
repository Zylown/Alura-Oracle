import {
  Button,
  Switch,
  TextField,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

function FormSingUp() {
  return (
    <form>
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="apellidos"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        margin="normal"
      />
      <FormGroup>
        <FormControlLabel
          label="Promociones"
          control={<Switch defaultChecked></Switch>}
        ></FormControlLabel>
        <FormControlLabel
          label="Novedades"
          control={<Switch defaultChecked></Switch>}
        ></FormControlLabel>
      </FormGroup>
      <Button variant="contained">Registrarse</Button>
    </form>
  );
}

export default FormSingUp;
