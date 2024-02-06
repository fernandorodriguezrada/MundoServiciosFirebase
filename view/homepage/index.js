import { app } from "./firebase.config.client.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const auth = getAuth(app);
const navbar = document.querySelectorAll(".navbar-links");
const userLogger = document.querySelector("#user-logger");
const loaderWrapper = document.querySelector(".loader-wrapper");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    navbar[1].children[0].children[0].children[0].style.display = "none";
    navbar[1].children[0].children[1].children[0].style.display = "none";
    userLogger.children[0].children[0].innerText = `${user.email}`;
    document.getElementById("logout-btn").style.display = "block";
  } else {
    navbar[1].children[0].children[0].children[0].style.display = "block";
    navbar[1].children[0].children[1].children[0].style.display = "block";
    userLogger.children[0].children[0].style.display = "none";
    document.getElementById("logout-btn").style.display = "none";
  }

  loaderWrapper.style.display = "none";
  document.body.classList.remove("loading");
});

//hide form

const openModalButton = document.getElementById("openModal");

onAuthStateChanged(auth, (user) => {
  if (user) {
    openModalButton.style.display = "block";
  } else {
    openModalButton.style.display = "none";
  }
});

// Logout button
const logoutBtn = document.querySelector("#logout-btn");
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  auth
    .signOut()
    .then(() => {
      console.log("User signed out!");
    })
    .catch((error) => {
      console.error("Error signing out: ", error);
    });
});

//A partir de aqui JS de estilos

// navbar

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

// logout and truck margins

const logoutButton = document.getElementById("logout-btn");

function updateMargin() {
  const truckImage = document.querySelector(".truck img");

  if (getComputedStyle(logoutButton).display !== "none") {
    truckImage.style.marginTop = "399px";
  } else {
    truckImage.style.marginTop = "480px";
  }
}

const maxWidthQuery = window.matchMedia("(max-width:  1043px)");

function handleMaxWidthChange(e) {
  if (e.matches) {
    updateMargin();
  } else {
    document.querySelector(".truck img").style.marginTop = "";
  }
}

handleMaxWidthChange(maxWidthQuery);
maxWidthQuery.addEventListener("change", handleMaxWidthChange);

new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "style") {
      if (maxWidthQuery.matches) {
        updateMargin();
      }
    }
  });
}).observe(logoutButton, { attributes: true });

//words

const title = document.querySelector(".title");
const titleSpan = title.querySelector("span");

const words = ["simple", "rápido", "seguro"];

let currentWordIndex = 0;

function changeWord() {
  const currentWord = words[currentWordIndex];
  const nextWord = words[(currentWordIndex + 1) % words.length];

  titleSpan.textContent = currentWord;

  titleSpan.style.transition = "opacity 1s ease-out";

  setTimeout(() => {
    titleSpan.style.opacity = 0;
    setTimeout(() => {
      titleSpan.textContent = nextWord;
      titleSpan.style.opacity = 1;
      titleSpan.style.transition = "";
    }, 500);
  }, 4000);

  currentWordIndex = (currentWordIndex + 1) % words.length;
}

changeWord();

setInterval(changeWord, 5000);

//scroll

var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 20) {
    scrollToTopBtn.classList.add("show");
    scrollToTopBtn.classList.remove("hide");
  } else {
    scrollToTopBtn.classList.add("hide");
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

const formContainer = document.querySelector(".form-container");
const scrollToFormContainer = () => {
  formContainer.scrollIntoView({ behavior: "smooth" });
};
document
  .querySelector(".contact-now")
  .addEventListener("click", scrollToFormContainer);

let touchStartX = 0;
let touchEndX = 0;

function touchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function touchMove(event) {
  touchEndX = event.touches[0].clientX;
}

function touchEnd(event) {
  if (touchStartX - touchEndX > 50) {
    plusSlides(1);
  } else if (touchEndX - touchStartX > 50) {
    plusSlides(-1);
  }
}

//slideshow

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
  }

  document.querySelector(".prev").addEventListener("click", function () {
    plusSlides(-1);
  });

  document.querySelector(".next").addEventListener("click", function () {
    plusSlides(1);
  });

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide(index + 1);
    });
  });
});

//capitalize

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  const nombreInput = document.querySelector('input[name="Nombre"]');

  nombreInput.value =
    nombreInput.value.charAt(0).toUpperCase() + nombreInput.value.slice(1);
});
