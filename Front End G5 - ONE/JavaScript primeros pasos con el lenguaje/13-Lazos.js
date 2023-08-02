const ciudadDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
const presupuestoDisponible = 210;

let i = 0;
//do while
do {
    i++;
} while (precioCiudad[i] > presupuestoDisponible && i < ciudadDisponibles.length) {
    if (i == ciudadDisponibles.length) {
        console.log("No tenemos pasajes disponibles.");
    } else {
        console.log("Puedes comprar pasaje para: " + ciudadDisponibles[i]);
    }
}
//Bucle de 0 más veces
//Do while 1 o más veces
//Cuando cumple la condición sale del bucle
/*
while (precioCiudad[i] > presupuestoDisponible && i < ciudadDisponibles.length) {
    i++;//Aumenta y recorre el arreglo
}*/
/*
//While
if (i == ciudadDisponibles.length) {
    console.log("No tenemos pasajes disponibles.");
} else {
    console.log("Puedes comprar pasaje para: " + ciudadDisponibles[i]);
}*/