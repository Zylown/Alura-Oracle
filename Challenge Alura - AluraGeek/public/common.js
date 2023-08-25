import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBYEHm8TVH4uaAZDF64gfCrh1z_MhCmwI",
  authDomain: "alurageek-a13d2.firebaseapp.com",
  databaseURL: "https://alurageek-a13d2-default-rtdb.firebaseio.com",
  projectId: "alurageek-a13d2",
  storageBucket: "alurageek-a13d2.appspot.com",
  messagingSenderId: "744596605356",
  appId: "1:744596605356:web:52f15e98d459450b7f1209",
  measurementId: "G-E2V95JH16G",
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export class ManageAccount {
  register(email, password) {
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((_) => {
        window.location.href = "/screens/productos.html";
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  authenticate(email, password) {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((_) => {
        window.location.href = "/screens/productos.html";
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  signOut() {
    signOut(getAuth())
      .then((_) => {
        window.location.href = "index.html";
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
}
