//loader

window.onload = function () {
  var loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.style.display = "none";

  document.body.classList.remove("loading"); // Enable scrolling
};

document.body.classList.add("loading");

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
