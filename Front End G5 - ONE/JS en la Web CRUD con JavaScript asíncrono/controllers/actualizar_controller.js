import { clienteService } from "../service/client-service.js";

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id"); //aca ponemos el nombre de la variable
  if (id === null) {
    window.location.href = "/screens/error.html";
  }

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");

  console.log(nombre, " - ", email);
  clienteService.detalleCliente(id).then((perfil) => {
    nombre.value = perfil.nombre;
    email.value = perfil.email;
  });
};

obtenerInformacion();
