import { app } from "./firebase.config.client.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const form = document.getElementById("loginForm");
const auth = getAuth(app);
const forgetPasswordElement = document.getElementById("forgetPassword"); // Get the forget password element

forgetPasswordElement.addEventListener("click", (event) => {
  event.preventDefault();

  const email = prompt(
    "Introduzca el correo del que desea recuperar la contraseña."
  );
  if (!email) return;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert(
        "Se ha enviado un correo de recuperación de contraseña, por favor sigue las instrucciones de dicho correo."
      );
    })
    .catch((error) => {
      console.error(error);
      alert("Error al enviar correo de recuperación de contraseña.");
    });
});

// wrong password message
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;
  const loginErrorElement = document.getElementById("loginError"); // Get the login error element

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.pathname = "/";
      console.log(userCredential.user);
    })
    .catch((err) => {
      loginErrorElement.textContent = "";

      if (err.code === "auth/wrong-password") {
        loginErrorElement.textContent =
          "La contraseña introducida es incorrecta.";
      } else {
        console.error(err);
      }
    });
});

//loader

window.onload = function () {
  var loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.style.display = "none";

  document.body.classList.remove("loading"); // Enable scrolling
};

document.body.classList.add("loading");

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
