import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  validarNombre,
  validarApellido,
  validarTelefono,
} from "./validaciones";

const DatosPersonales = ({ updateStep }) => {
  const [name, setName] = useState({ value: "", valid: null });
  const [lastName, setLastName] = useState({ value: "", valid: null });
  const [phone, setPhone] = useState({ value: "", valid: null });

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "15px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        updateStep(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={name.valid === false} //tiene que ser cuando el email NO SEA VALIDO; cuando sea true que aparezca el error
        helperText={
          name.valid === false &&
          "Ingresa un nombre con más de 1 caracter y máximo de 30 caracteres"
        }
        value={name.value}
        onChange={(e) => {
          const value = e.target.value;
          const valid = validarNombre(value);
          setName({ value, valid });
          console.log(value, valid);
          /*
          setName({
            value: e.target.value,
            valid: validarNombre(e.target.value),
          });*/
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={lastName.valid === false} //tiene que ser cuando el email NO SEA VALIDO; cuando sea true que aparezca el error
        helperText={
          lastName.valid === false &&
          "Ingresa un apellido con más de 1 caracter y máximo de 50 caracteres"
        }
        value={lastName.value}
        onChange={(e) => {
          const value = e.target.value;
          const valid = validarApellido(value);
          setLastName({ value, valid });
          console.log(value, valid);
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        error={phone.valid === false} //tiene que ser cuando el email NO SEA VALIDO; cuando sea true que aparezca el error
        helperText={
          phone.valid === false &&
          "Ingresa al menos 8 dígitos y máximo 14 dígitos"
        }
        value={phone.value}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        onChange={(e) => {
          const value = e.target.value;
          const valid = validarTelefono(value);
          setPhone({ value, valid });
          console.log(value, valid);
        }}
      />
      <Button variant="contained" type="submit" sx={{ marginTop: "15px" }}>
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
