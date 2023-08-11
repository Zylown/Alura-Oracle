import { clienteService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form");

const obtenerInformacion = async () => {
  const url = new URL(window.location); //es para obtener la URL actual
  const id = url.searchParams.get("id");
  //aca ponemos el nombre de la variable  se espera que la URL contenga un parámetro llamado "id" que identificará al cliente cuya
  //información se debe mostrar
  if (id === null) {
    //si no se proporciona un ID válido en la URL, el usuario será redirigido a una página de error.
    window.location.href = "/screens/error.html";
  }

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");
  try {
    const perfil = await clienteService.detalleCliente(id); //el then ya lo maneja aca el await
    if (perfil) {
      nombre.value = perfil.nombre;
      email.value = perfil.email;
    } else {
      throw new Error();
    }
  } catch (error) {
    window.location.href = "/screens/error.html";
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); //evita que el formulario haga el formulario
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;

  clienteService
    .actualizarCliente(nombre, email, id)
    .then(() => {
      window.location.href = "/screens/edicion_concluida.html";
    })
    .catch(() => {
      window.location.href = "/screens/error.html";
    });
});
