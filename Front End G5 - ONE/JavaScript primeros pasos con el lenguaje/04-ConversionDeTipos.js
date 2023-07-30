
//const = variable que no cambia en el tiempo, no deja que un 2do valor pueda asignarse
//const nombrePasajero = "Peter Castle";
//console.log(nombrePasajero);

//let = variable que si puede cambiar en el tiempo
let nombrePasajero1 = "Peter Castle";
console.log(nombrePasajero1);
nombrePasajero1 = "Pedro Castillo";
console.log(nombrePasajero1);

//Numérico, con let identifica que tipo de dato como str o int
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeDeTasaEmbarque = 60/100;
var gestionAgencia = 100;
console.log(valorBoleto);

//Lógicos(T,F)
let boletoActivo = true;

//Operaciones Aritmeticas
//Suma

//let totalBoletos = valorBoleto + impuestoAeropuerto+(valorBoleto * porcentajeDeTasaEmbarque) + gestionAgencia;
let totalBoletos = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto) * porcentajeDeTasaEmbarque + gestionAgencia;
console.log(totalBoletos);

//Concatenación de textos
let nombrePasajero = "Sevastian";
let apellidoPasajero = "Caballero";

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = parseInt('1000') + parseInt('12');
let multiplicacion = parseInt( '1000') / parseFloat('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsNumero = parseInt("AASASA");
console.log(noEsNumero);