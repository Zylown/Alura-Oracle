import { Button } from "@mui/material";

function FormSingUp() {
  return (
    <form>
      <label>Nombre</label>
      <input type="text"></input>
      <label>Apellidos</label>
      <input type="text"></input>
      <label>Correo Electrónico</label>
      <input type="email"></input>
      <label>Promociones</label>
      <input type="checkbox"></input>
      <label>Novedades</label>
      <input type="checkbox"></input>
      <Button variant="contained">
        Registrarse
      </Button>
    </form>
  );
}

export default FormSingUp;
