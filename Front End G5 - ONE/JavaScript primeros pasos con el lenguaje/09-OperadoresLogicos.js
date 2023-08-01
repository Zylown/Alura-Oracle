//Operadores de comparacion
const ciudadDestino = "Bogotá";
const ciudadDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

//Respuesta Docente
//Este método devuelve el índice del primer elemento del array que coincide con el valor proporcionado,
//o -1 si el valor no se encuentra en el array.
//El arreglo empieza desde 0, si ciudadDestino está en el arreglo devolvera entre(0,1,2,3), pero si no está devuelve -1 y no entra en el if
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadDisponibles.indexOf(ciudadDestino) >=0){//puede ser > -1 también funcionaria
    console.log("Pasaje disponible para venta");
}else{
    console.log("Pasaje no disponible para venta");
}

//Palabra reservada if, evalua una condicion
/*if (ciudadDisponibles.find(elemento => elemento === ciudadDestino)){
    console.log("Vendo el pasaje");
}else{
    console.log("NO vendo el pasaje");
}*/

/*
Otra solución más directa y eficiente es utilizar el método includes del array, 
que devuelve un booleano dependiendo de si un elemento está o no en el array:
if (ciudadDisponibles.includes(ciudadDestino)){
    console.log("Vendo el pasaje");
} else {
    console.log("NO vendo el pasaje");
}
*/

const valorPasaje = "1000";
// si if (valorPasaje === 1000), el === compara si el numero es igual pero como valorPasaje es String saldria error
if (valorPasaje == 1000){//Acá no es estricto y hace un casteo y compara igual el número
    console.log("El pasaje vale 1000");
}