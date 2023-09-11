import React from "react";
import { TextField, Button, Box } from "@mui/material";
//(props) es = a ({updateStep}) -> ya esta destructurado
const DatosEntrega = ({ updateStep }) => {
  //const updateStep = props.updateStep; //sin destructurar
  //const {updateStep} = props; // destructurado
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
        //props.updateStep(3);
        updateStep(3);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
