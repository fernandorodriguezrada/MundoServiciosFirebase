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
