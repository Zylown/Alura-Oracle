export const validarDatosEntrega = (input) => {
  //Los 3 campos que usamos va ser igual asi que por eso nombre
  return input.length > 4 ? true : false;
};
