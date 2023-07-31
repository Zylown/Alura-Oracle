//const
//Espacio en memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;
console.log(valorPasaje);

const nombrePasajero = "Piero";
const apellidoPasajero = "Caballero";

console.log(nombrePasajero);
console.log(apellidoPasajero);

// Error porque cambio el espacio en memoria y const no cambia
//nombrePasajero = nombrePasajero + " " + apellidoPasajero; 
//console.log(nombrePasajero);

//let
//Espacio en memoria que puede cambiar durante la ejecucion
//Solo está disponible dentro del bloque
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero; 
console.log(nombreCompletoPasajero);

//var
//Espacio en memoria que puede cambiar durante la ejecucion
//El alcance de la variable es total en cualquier punto principal del programa dentro de todo el programa y sus sub bloques
var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

{
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero; 
}
console.log("Variable con let: " + nombreCompletoPasajero);
console.log("Variable con var: " + nombreCompletoDelPasajero);