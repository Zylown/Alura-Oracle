//Definición de una lista con tipo de dato alfabético
const ciudadDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");
//console.log(ciudadDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia","Perú","Chile","Brasil","Argentina","Uruguay","Venezuela"];
//console.log(paisesDisponibles);

const cantidadCiudades = ciudadDisponibles.length;
console.log(`En la lista de ciudades tenemos: ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos: ${paisesDisponibles.length} elementos`);

//Remover el primer elemento
ciudadDisponibles.shift(); //elimino Bogota
console.log(ciudadDisponibles);
console.log(`En la lista de ciudades tenemos: ${ciudadDisponibles.length} elementos`);

//Remover el último elemento
ciudadDisponibles.pop(); //Elimino Montevideo
console.log(ciudadDisponibles);
console.log(`En la lista de ciudades tenemos: ${ciudadDisponibles.length} elementos`);

//Filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e)=> e == "Brasil");
console.log(paisesFiltrados);
/*
El método filter devuelve un nuevo array que contiene todos los elementos del array original que cumplan con la condición proporcionada
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
*/ 

// Unificar los elementos en una cadena, para separar los valores de una lista
console.log(paisesDisponibles.join(" - "))

//Ordenar una lista
//Sort si modifica, ordena y cambia la lista
console.log(paisesDisponibles.sort());

//Conociendo la posicion
console.log(`Perú esta en la posición: ${paisesDisponibles.indexOf("Perú")}` )

//Unificar dos listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadDisponibles);
console.log(listaPaisesYCiudades);