import { ManageAccount } from "../common.js";

document.getElementById("button-salir").addEventListener("click", (_) => {
  const account = new ManageAccount();
  account.signOut();
});