import {
  Button,
  Switch,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
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
  //const [helperText, setHelperText] = useState("No puede estar vacío");
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
    /*
    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", (event) => {
      const form = event.target;
      const { name } = event.target.elements;
      if (name.value === "") {
        mostrarError("El nombre, no puede estar vacío");
      }
    });*/
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

  // Esta función se llama cuando el campo de correo electrónico pierde el foco (onBlur).
  const handleEmailBlur = () => {
    // Llama a la función de validación personalizada 'validarCorreo' y obtiene el resultado de la validación.
    const emailValidation = validarCorreo(email);

    // Actualiza el estado de los errores para el campo de correo electrónico ('email').
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: {
        // Establece 'error' en 'true' si hay un error de validación, 'false' de lo contrario.
        error: emailValidation.error,
        // Asigna el mensaje de error obtenido de la función de validación.
        message: emailValidation.message,
      },
    }));
  };

  // Función de validación personalizada para el campo de correo electrónico.
  function validarCorreo(correo) {
    // Expresión regular para verificar el formato del correo electrónico.
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let error = false; // Inicializa 'error' como 'false' (sin errores).
    let message = ""; // Inicializa 'message' como una cadena vacía (sin mensaje de error).

    // Verifica si el campo de correo electrónico está vacío.
    if (!correo) {
      error = true; // Hay un error si el campo está vacío.
      message = "El campo correo no puede estar vacío."; // Establece el mensaje de error correspondiente.
    } else if (!regexCorreo.test(correo)) {
      // Verifica si el correo electrónico no cumple con el formato correcto.
      error = true; // Hay un error si el formato no es válido.
      message = "El correo no tiene el formato correcto."; // Establece el mensaje de error correspondiente.
    }
    // Devuelve un objeto con 'error' y 'message' para indicar el resultado de la validación.
    return { error, message };
  }

  return (
    <form id="register-form" onSubmit={handleSubmitForm}>
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
        required
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
        required
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
        <FormControlLabel
          label="Acepto los términos y condiciones"
          control={<Checkbox size="small" required></Checkbox>}
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
