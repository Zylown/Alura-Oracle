import { clienteService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form");

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id"); //aca ponemos el nombre de la variable
  if (id === null) {
    window.location.href = "/screens/error.html";
  }

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");

  clienteService.detalleCliente(id).then((perfil) => {
    nombre.value = perfil.nombre;
    email.value = perfil.email;
  });
};

obtenerInformacion();

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); //evita que el formulario haga el formulario
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  console.log(nombre + " - " + email);

  clienteService
    .actualizarCliente(nombre, email, id)
    .then(() => {
      window.location.href = "/screens/edicion_concluida.html";
    })
    .catch(() => {
      window.location.href = "/screens/error.html";
    });
});
