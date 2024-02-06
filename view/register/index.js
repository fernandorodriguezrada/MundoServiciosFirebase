import { app } from "./firebase.config.client.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const form = document.getElementById("registerForm");
const auth = getAuth(app);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.pathname = "/login";
    })
    .catch((err) => console.error(err));
});

//password toggle

const passwordInput = document.querySelector(".password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  this.textContent =
    type === "password" ? "Mostrar Contraseña" : "Ocultar Contraseña";
});
