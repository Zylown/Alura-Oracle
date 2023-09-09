import {
  Button,
  Switch,
  TextField,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

function FormSignUp({ handleSubmit }) {
  //const {handleSubmit} = props; // destructurar
  /*
   la primera posición de ese array es el valor del estado y la segunda posición es una función con la cual podremos actualizar el valor de nuestro estado.
  */
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prom, setProm] = useState(true);
  const [nov, setNov] = useState(false);
  /*useEffect(() => {
    console.log("Name cambio: ", name);
  }, [name]);*/

  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "Deben ser al menos 3 caracteres",
    },
    lastName: {
      error: false,
      message: "Deben ser al menos 3 caracteres",
    },
    email: {
      error: false,
      message: "El correo no tiene el formato correcto",
    },
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit({ name, lastName, email, prom, nov });
  };

  const handleNameBlur = () => {
    const nameValidation = name.length >= 3;
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: {
        error: !nameValidation,
        message: nameValidation ? "" : "Deben ser al menos 3 caracteres",
      },
    }));
  };

  const handleLastNameBlur = () => {
    const lastNameValidation = lastName.length >= 3;
    setErrors((prevErrors) => ({
      ...prevErrors,
      lastName: {
        error: !lastNameValidation,
        message: lastNameValidation ? "" : "Deben ser al menos 3 caracteres",
      },
    }));
  };

  const handleEmailBlur = () => {
    const lastNameValidation = lastName.length >= 3;
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: {
        error: !lastNameValidation,
        message: lastNameValidation ? "" : "Deben ser al menos 3 caracteres",
      },
    }));
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => {
          //console.log(e.target.value); el valor para ver lo que se escribe en los input
          setName(e.target.value);
        }}
        value={name}
        error={errors.name.error}
        helperText={errors.name.error ? errors.name.message : ""}
        onBlur={handleNameBlur}
      />
      <TextField
        id="apellidos"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        value={lastName}
        error={errors.lastName.error}
        helperText={errors.lastName.error ? errors.lastName.message : ""}
        onBlur={handleLastNameBlur}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        margin="normal"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        error={errors.email.error}
        helperText={errors.email.error ? errors.email.message : ""}
        onBlur={handleEmailBlur}
      />
      <FormGroup>
        <FormControlLabel
          label="Promociones"
          control={
            <Switch
              checked={prom}
              onChange={(e) => setProm(e.target.checked)}
            ></Switch>
          }
        ></FormControlLabel>
        <FormControlLabel
          label="Novedades"
          control={
            <Switch
              checked={nov}
              onChange={(e) => {
                setNov(e.target.checked);
                //console.log(e.target.checked);
              }}
            ></Switch>
          }
        ></FormControlLabel>
      </FormGroup>
      <Button variant="contained" type="submit">
        Registrarse
      </Button>
    </form>
  );
  /*
  La prop checked se utiliza en el componente Switch de Material-UI para determinar si el interruptor (Switch) debe estar en un estado activado o desactivado.
  */
}

export default FormSignUp;

/*const errorValidation = {
    name: (value) => {
      return value.length >= 3
        ? { error: false, message: "" }
        : { error: true, message: "Deben ser al menos 3 caracteres" };
    },
  };*/

/*
  const validarNombre = () => {
    return name.length >= 3
      ? { name: { error: false, message: "" } }
      : { name: { error: true, message: "Deben ser al menos 3 caracteres" } };
  };

  const validarApellido = () => {
    return lastName.length >= 3
      ? { lastName: { error: false, message: "" } }
      : {
          lastName: { error: true, message: "Deben ser al menos 3 caracteres" },
        };
  };
*/
