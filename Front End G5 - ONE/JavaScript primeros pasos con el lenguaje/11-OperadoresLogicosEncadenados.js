const ciudadDestino = "Bogotá";
const ciudadDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 18;
let estaAcompanado = true;
let tienePasaporte = true;
let estaCasado = false;//esta casado
console.log(`Verificando pasajes para ${ciudadDestino}`);

//A && B || C
//puede ser > -1 también funcionaria
if (ciudadDisponibles.indexOf(ciudadDestino) > -1 && edadPasajero >= 18 &&
    tienePasaporte && !estaCasado) {//estaCasado = true; osea tiene que ser falso para que ente ahí
    // no tiene que estar casado para que entre
    console.log("Paquete para solteros disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar o no cumple las reglas");
}