const datos = [
    {
        "ciudad": "Bogotá",
        "precio": 500
    },
    {
        "ciudad": "Lima",
        "precio": 400
    },
    {
        "ciudad": "Santiago",
        "precio": 380
    },
    {
        "ciudad": "Montevideo",
        "precio": 200
    }
]

const presupuestoDisponible = 500;

let i = 0;
//i < datos.length: Esta parte asegura que i no exceda la longitud de datos, evitando un error de índice fuera de rango.
//datos[i].precio > presupuestoDisponible: Esta parte verifica si el precio de la ciudad actual (denotado por datos[i].precio) es mayor que el presupuesto disponible.
/*while (i < datos.length && datos[i].precio > presupuestoDisponible) {//El orden si importa
    //primero hay que evaluar si tiene los suficientes datos el mapeo de datos
    i++;//Aumenta y recorre el arreglo
}*/
/*
Sin embargo, eso es precisamente lo que queremos. Si el precio es mayor que el presupuesto disponible, aumentamos i y pasamos a la siguiente ciudad. Continuamos este proceso hasta encontrar una ciudad que esté dentro del presupuesto o hasta que hayamos comprobado todas las ciudades.
*/

let ciudadSeleccionada = '';
do {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    console.log(ciudadSeleccionada);
    i++;
} while (i < datos.length && ciudadSeleccionada == '');

console.log(datos.length);
console.log(i);

//if (i > datos.length) {//Aca debería ser cuando se pasa aparezca este mensaje, no =, es Falso
if (ciudadSeleccionada == ''){
    console.log("No tenemos pasajes disponibles.");
} else {
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}