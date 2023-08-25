import { ManageAccount } from "../common.js";

document.getElementById("button-register").addEventListener("click", (_) => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const account = new ManageAccount();
  account.register(email, pass);
});
