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
