const ciudadDestino = "Bogotá";
const ciudadDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let valorPasaje = 0;

switch (ciudadDestino) {
    case "Bogotá":
        console.log(`El valor del pasaje es 500.`);
        break;
    case "Lima":
        console.log(`El valor del pasaje es 400.`);
        break;
    case "Santiago":
        console.log(`El valor del pasaje es 300.`);
        break;
    case "Montevideo":
        console.log(`El valor del pasaje es 100.`);
        break;
    default:
        console.log(`No hay pasaje para la ciudad indicada.`);
        break;
}