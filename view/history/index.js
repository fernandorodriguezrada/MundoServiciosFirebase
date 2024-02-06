import { app } from "./firebase.config.client.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

import { getServices } from "./apiFetch.js";

const auth = getAuth(app);

const navbar = document.querySelectorAll(".navbar-links");
const userLogger = document.querySelector("#user-logger");

const cards = document.querySelectorAll(".card");
const circles = document.querySelectorAll(".circle");
const cardSpan = document.querySelectorAll(".card-span");
const basura = document.querySelectorAll(".basura");
const images = document.querySelectorAll(".rotate-image");
const historyContainer = document.querySelector(".history-container");

cards.forEach(function (card, index) {
  console.log(card);
  card.addEventListener("click", function () {
    // Aquí puedes usar el índice para acceder al elemento correspondiente en cardSpan
    if (this.style.height === "250px") {
      this.style.height = "80px";
      this.style.transition = "height 0.5s ease-in-out";
      this.style.alignItems = "";
      cardSpan[index].style.marginBottom = "0px";
      cardSpan[index].style.transition = "margin-bottom 0.5s ease-in-out";
    } else {
      this.style.height = "250px";
      this.style.transition = "height 0.5s ease-in-out";
      this.style.alignItems = "";
      cardSpan[index].style.marginBottom = "170px";
      cardSpan[index].style.transition = "margin-bottom 0.5s ease-in-out";
    }
  });
});

basura.forEach(function (boton, index) {
  boton.addEventListener("click", function () {
    cards[index].style.transition = "display 0.5s ease-in-out";
    cards[index].style.display = "none";
  });
});

images.forEach((image) => {
  image.addEventListener("click", function () {
    const angle = parseInt(image.dataset.angle) || 0;
    const newAngle = angle + 180;
    image.style.transform = `rotate(${newAngle}deg)`;
    image.dataset.angle = newAngle;
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      navbar[1].children[0].children[0].children[0].style.display = "none";
      navbar[1].children[0].children[1].children[0].style.display = "none";
      userLogger.children[0].children[0].innerText = `${user.email}`;
    } else {
      navbar[1].children[0].children[0].children[0].style.display = "block";
      navbar[1].children[0].children[1].children[0].style.display = "block";
      userLogger.children[0].children[0].style.display = "none";
    }
  });

  getServices()
    .then((response) => {
      console.log(response);
      const result = response.message;
      result.map((objectServices) => {
        let card = () => `
            <div class="card">
              <span class="card-span" id ="card-span">
              ${objectServices.service.asunto}
              <br />
              <span style="font-size: 12px; color: #777777">hace un dia</span></span>
              <div class="expand">
              <div class="rotate-container">
              <img src="../assets/imgs/angulo-hacia-abajo.webp" class ="rotate-image"/>
              </div>
              </div>
              <div class="history-info">
              Estado: <span style="color: #a79600">En camino.</span><br />
              Precio: <span style="color: #777777">${objectServices.service.price}$.</span><br />
              Destino:<span style"color: #777777">${objectServices.service.destino}</span>
              <br />
              Conductor: <span style="color: #777777">Miguel Botello.</span>
              </div>
              <div class="basura">
              <div class="bar">
              </div>
              <img src="../assets/imgs/basura.webp" />
              </div>
              </div>
        `;
        historyContainer.insertAdjacentHTML("beforeend", card());
      });
    })
    .catch((err) => console.log(err));
});

//loader

window.onload = function () {
  var loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.style.display = "none";

  document.body.classList.remove("loading"); // Enable scrolling
};

// Add the 'loading' class to the body element when loading starts
document.body.classList.add("loading");

//navbar

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const exitLink = document.querySelector(".exit-li a");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  if (navbarLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

exitLink.addEventListener("click", (event) => {
  event.preventDefault();
  navbarLinks.classList.remove("active");
  document.body.style.overflow = "auto";
});

//
