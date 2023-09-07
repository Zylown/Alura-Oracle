import {
  fondoClaro,
  contenidoClaro,
  textoFondoClaro,
  fondoOscuro,
  contenidoOscuro,
  textoFondoOscuro,
} from "./variable.js";

export const temaClaro = {
  body: fondoClaro,
  inside: contenidoClaro,
  text: textoFondoClaro,
  filter: "",
};

export const temaOscuro = {
  body: fondoOscuro,
  inside: contenidoOscuro,
  text: textoFondoOscuro,
  filter: "invert(100%)", //solo altera en los svg
};
