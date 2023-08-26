import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

document
  .getElementById("form__login")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      const user = auth.currentUser;
      if (user) {
        window.location.href = "../screens/home-login.html";
      } else {
        console.error("Usuario no autenticado");
      }
    } catch (error) {
      //console.error(error.message);
      const errorMessage = error.message;
      // Aquí puedes mostrar el mensaje de error en algún elemento HTML
      document.getElementById("error-message").textContent = errorMessage;
    }
  });
