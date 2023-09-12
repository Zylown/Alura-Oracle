import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarDatosEntrega } from "./validaciones";
//(props) es = a ({updateStep}) -> ya esta destructurado
const DatosEntrega = ({ updateStep }) => {
  //const updateStep = props.updateStep; //sin destructurar
  //const {updateStep} = props; // destructurado
  const [address, setAddress] = useState({ value: "", valid: null });
  const [city, setCity] = useState({ value: "", valid: null });
  const [estado, setEstado] = useState({ value: "", valid: null });

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
        //props.updateStep(3); // lo mismo que updateStep(3);
        updateStep(3);
        console.log(address, city, estado);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={address.valid === false} //tiene que ser cuando el address NO SEA VALIDO; cuando sea true que aparezca el error
        helperText={address.valid === false && "Ingresa al menos 4 caracteres"}
        value={address.value}
        onChange={(e) => {
          const value = e.target.value;
          const valid = validarDatosEntrega(value);
          setAddress({ value, valid });
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={city.valid === false} //tiene que ser cuando el city NO SEA VALIDO; cuando sea true que aparezca el error
        helperText={city.valid === false && "Ingresa al menos 4 caracteres"}
        value={city.value}
        onChange={(e) => {
          const value = e.target.value;
          const valid = validarDatosEntrega(value);
          setCity({ value, valid });
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={estado.valid === false} //tiene que ser cuando el estado NO SEA VALIDO; cuando sea true que aparezca el error
        helperText={estado.valid === false && "Ingresa al menos 4 caracteres"}
        value={estado.value}
        onChange={(e) => {
          const value = e.target.value;
          const valid = validarDatosEntrega(value);
          setEstado({ value, valid });
        }}
      />
      <Button variant="contained" type="submit" sx={{ marginTop: "15px" }}>
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
