import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {
  const [step, setStep] = useState(1);
  /*
  const handleStep = () => {
    switch (step) {
      case 0:
        return <DatosUsuario></DatosUsuario>;
        break;
      case 1:
        return <DatosPersonales></DatosPersonales>;
        break;
      case 2:
        return <DatosEntrega></DatosEntrega>;
        break;
      default:
        return <Complete></Complete>;
        break;
    }
  };
*/

  const updateStep = (step) => {
    console.log("Actualizar paso", step);
    setStep(step);
  };
  const steps = {
    0: <DatosUsuario updateStep={updateStep}></DatosUsuario>,
    1: <DatosPersonales updateStep={updateStep}></DatosPersonales>,
    2: <DatosEntrega updateStep={updateStep}></DatosEntrega>,
    3: <Complete></Complete>,
  };
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step}></Stepper>}
        {/* <DatosUsuario />
        <DatosPersonales />
        <DatosEntrega /> */}
        {steps[step]}
      </FormSpace>
    </Box>
  );
};

export default Form;
