import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

const firebaseConfig = {
  apiKey: "AIzaSyANBfvlA5QHDa2tkS5uI6HryfUWs6S8glY",
  authDomain: "mundo-servicios-webpage.firebaseapp.com",
  projectId: "mundo-servicios-webpage",
  storageBucket: "mundo-servicios-webpage.appspot.com",
  messagingSenderId: "881478598118",
  appId: "1:881478598118:web:023c67429f553a15d42a27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {
  app
}