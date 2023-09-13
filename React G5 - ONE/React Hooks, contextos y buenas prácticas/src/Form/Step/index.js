import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const Step = ({ data, step }) => {
  const { inputs, buttonText, onSubmit } = data;
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
