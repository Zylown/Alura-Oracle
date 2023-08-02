const ciudadDestino = "Bogotá";
const ciudadDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 17;
let estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
//Verificando que el pasajero cumpla las reglas
if (edadPasajero >= 18 || estaAcompanado) {
    //Evaluamos si la ciudad está disponible para viajar
    if (ciudadDisponibles.indexOf(ciudadDestino) > -1) {// o >= 0
        console.log("Pasaje disponible para venta");
    } else {
        console.log("Ciudad no disponible para viajar");
    }
} else {
    if(edadPasajero >= 16 && ciudadDestino=="Lima"){
        console.log("Pasaje disponible para venta");
    }else{
        console.log("Ciudad no cumple las reglas");
    }
}