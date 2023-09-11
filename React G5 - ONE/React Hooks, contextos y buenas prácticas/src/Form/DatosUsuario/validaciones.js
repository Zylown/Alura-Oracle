export const validarEmail = (email) => {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //console.log(email);
  /*
  verifica si email es uno de los valores mencionados 
  false: El valor booleano false.
0: El número entero cero.
"" o '': Una cadena de texto vacía.
null: Un valor especial que representa la ausencia de un valor.
undefined: Un valor especial que indica que una variable no tiene un valor asignado.
NaN: Un valor especial que representa "Not-a-Number" y se utiliza para denotar resultados no numéricos en operaciones matemáticas.
  */
  if (!email) {
    // es igual (email == false)
    console.log("Email Vacio o falso");
    return false;
  } else if (!regexEmail.test(email)) {
    console.log("Email Invalido");
    return false;
  } else {
    console.log("Válido");
    return true;
  }

  //   if (length > 8 && length < 25 && email.includes("@")) {
  //     console.log("Valido");
  //   } else {
  //     console.log("Invalido");
  //   }
};
//esto pasa luego de darle al botón siguiente del form
export function validarPassword(password) {
  const length = password.length;
  if (length >= 8 && length < 20) {
    //console.log("Valido");
    return true;
  } else {
    //console.log("Invalido");
    return false;
  }
}
