import {
  Button,
  Switch,
  TextField,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

function FormSingUp({ handleSubmit }) {
  //const {handleSubmit} = props; // destructurar 
  /*
   la primera posición de ese array es el valor del estado y la segunda posición es una función con la cual podremos actualizar el valor de nuestro estado.
  */
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prom, setProm] = useState(true);
  const [nov, setNov] = useState(false);
  /*useEffect(() => {
    console.log("Name cambio: ", name);
  }, [name]);*/

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ name, lastName, email, prom, nov });
      }}
    >
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => {
          //console.log(e.target.value); para ver lo que se escribe en los input
          setName(e.target.value);
        }}
        value={name}
      />
      <TextField
        id="apellidos"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        value={lastName}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        margin="normal"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <FormGroup>
        <FormControlLabel
          label="Promociones"
          control={
            <Switch
              checked={prom}
              onChange={(e) => setProm(e.target.checked)}
            ></Switch>
          }
        ></FormControlLabel>
        <FormControlLabel
          label="Novedades"
          control={
            <Switch
              checked={nov}
              onChange={(e) => {
                setNov(e.target.checked);
                //console.log(e.target.checked);
              }}
            ></Switch>
          }
        ></FormControlLabel>
      </FormGroup>
      <Button variant="contained" type="submit">
        Registrarse
      </Button>
    </form>
  );
  /*
  La prop checked se utiliza en el componente Switch de Material-UI para determinar si el interruptor (Switch) debe estar en un estado activado o desactivado.
  */
}

export default FormSingUp;
