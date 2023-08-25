// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBYEHm8TVH4uaAZDF64gfCrh1z_MhCmwI",
  authDomain: "alurageek-a13d2.firebaseapp.com",
  databaseURL: "https://alurageek-a13d2-default-rtdb.firebaseio.com",
  projectId: "alurageek-a13d2",
  storageBucket: "alurageek-a13d2.appspot.com",
  messagingSenderId: "744596605356",
  appId: "1:744596605356:web:52f15e98d459450b7f1209",
  measurementId: "G-E2V95JH16G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);