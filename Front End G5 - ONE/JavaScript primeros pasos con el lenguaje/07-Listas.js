//Definición de una lista con tipo de dato alfabético
const ciudadDisponibles = new Array("Bogotá","Lima","Santiago");
console.log(ciudadDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia","Perú","Chile","Brasil","Argentina"];
console.log(paisesDisponibles);

{
    paisesDisponibles.push("Uruguay");
    ciudadDisponibles.push("Montevideo");

    console.log(ciudadDisponibles);
    console.log(paisesDisponibles);
}
//unshift inserta al inicio de la lista
paisesDisponibles.unshift("Ecuador");
paisesDisponibles.unshift("Quito");
console.log(ciudadDisponibles);
console.log(paisesDisponibles);

//Mostrando el primer elemento de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadDisponibles[0]);

//splice sirve para reemplazar splice(indice de la lista a reemplazar, cuantos quiere reemplazar,valores a agregar,valores a agregar)
paisesDisponibles.splice(1,2,'Venezuela','Paraguay');
console.log(paisesDisponibles);