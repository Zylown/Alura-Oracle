import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = () => {
  //[el primero es la manera que nos referimos, valor que modificamos el valor de ese estado]
  const [email, setEmail] = useState({
    value: "",
    valid: true,
  });

  const [password, setPassword] = useState({
    value: "",
    valid: true,
  });
  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ email, password });
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={false}
        helperText={false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(event) => {
          const emailChange = event.target.value;
          const valido = validarEmail(emailChange);
          setEmail({ value: emailChange, valid: valido });
        }}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        value={password.value}
        onChange={(event) => {
          const passwordChange = event.target.value;
          setPassword({
            value: passwordChange,
            valid: validarPassword(passwordChange),
          });
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosUsuario;
