import { ManageAccount } from "../common.js";

document.getElementById("button-login").addEventListener("click", (_) => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const access = new ManageAccount();
  access.authenticate(email, pass);
});
