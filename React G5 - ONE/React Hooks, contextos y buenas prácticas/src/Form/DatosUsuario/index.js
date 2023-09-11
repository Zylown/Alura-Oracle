import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({updateStep}) => {
  //[el primero es la manera que nos referimos, valor que modificamos el valor de ese estado]
  const [email, setEmail] = useState({
    value: "",
    valid: null,
  });

  const [password, setPassword] = useState({
    value: "",
    valid: null,
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
        marginTop: "15px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (email.valid && password.valid) {
          console.log("Siguiente Formulario");
          console.log({ email, password });
          updateStep(1);
        } else {
          console.log("Error");
        }
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false} //tiene que ser cuando el email NO SEA VALIDO; cuando sea true que aparezca el error
        helperText={
          email.valid === false && "Ingresa un correo electrónico válido"
        }
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
        error={password.valid === false}
        /*verifica si password.valid es igual a false, lo que significa que la contraseña no es válida.
         Si password.valid es false, entonces la expresión password.valid === false será true
         */
        helperText={
          password.valid === false &&
          "Ingresa una contraseña válida, al menos 8 caracteres"
        }
        onChange={(event) => {
          const passwordChange = event.target.value;
          setPassword({
            value: passwordChange,
            valid: validarPassword(passwordChange),
          });
        }}
      />
      <Button variant="contained" type="submit" sx={{ marginTop: "15px" }}>
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosUsuario;
