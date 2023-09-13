import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";
//Validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";
const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({});

  useEffect(() => {
    //useEffect se manda a llamar una vez cargado el componente
    //también podemos escuchar ciertos cambios que existan dentro de nuestros estados
    console.log("UseEffect");
  });

  useEffect(() => {
    // podemos escuchar los cambios de ciertos estados
    console.log("se ha actualizado", step);
  }, [step]); // escucha cada vez un cambio en el state
  /*
  //Ejemplo de como llamar a un backend
  useEffect(async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts"); //funcion con el async
      // tratar de obtener la información de fetch de la API
      //const data = await fetch("https://jsonplaceholder.typicode.com/posts"); //funcion con el async
      //const data1 = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json(); //es lo mismo que posts
      //console.log(data1);
      const posts = await data.json();
      console.log(posts); //muestra todos los objetos traidos de la API
    } catch (error) {
      console.log(error);
    }
  });
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

  const onSubmit = (e) => {
    e.preventDefault();
    let newStep = step + 1;
    setStep(newStep); // no se ejecuta de inmediato, tiene un proceso
    console.log("Actualizar paso", newStep);
    console.log(step); //step es el valor actual del useState
  };

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value;
    const valid = validator(value);
    console.log(value);
    console.log(valid);
    console.log("Paso actual: ", currentStep); // posicion del paso stepsFlow
    console.log("Posicion: ", position); //posicion del arreglo inputs
    console.log("Validator: ", validator);
  };

  //Flujo de los pasos
  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo Electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresar un correo electrónico válido.",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una contraseña válida, al menos 8 caracteres",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
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
        {/* {steps[step]} */}
        <Step data={stepsFlow[step]} step={step}></Step>
      </FormSpace>
    </Box>
  );
};

export default Form;

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
