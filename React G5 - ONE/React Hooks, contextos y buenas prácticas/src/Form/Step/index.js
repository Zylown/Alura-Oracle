import React, { useState, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { CounterContext } from "../../Context";
import { useAuth } from "../../Hooks/useAuth";
const Step = ({ data, step }) => {
  const { inputs, buttonText, onSubmit } = data;
  const counterData = useContext(CounterContext);
  const access = useAuth(counterData.user.jwt);
  console.log(access);
  //console.log(counterData);
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
      onSubmit={onSubmit}
    >
      <strong>El valor del contador es: {counterData.count}</strong>;
      {inputs.map((input, index) => {
        const { label, type, value, valid, onChange, helperText, validator } =
          input; //Form index.js
        return (
          <TextField
            key={index}
            label={label}
            variant="outlined"
            fullWidth
            margin="dense"
            type={type}
            error={valid === false} //tiene que ser cuando el email NO SEA VALIDO; cuando sea true que aparezca el error
            helperText={valid === false && { helperText }}
            value={value}
            onChange={(e) => onChange(e, index, step, validator)}
          />
        );
      })}
      <Button variant="contained" type="submit" sx={{ marginTop: "15px" }}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default Step;
