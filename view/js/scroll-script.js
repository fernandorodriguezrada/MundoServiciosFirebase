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
