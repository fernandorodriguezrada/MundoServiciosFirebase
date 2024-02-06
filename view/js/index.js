const cards = document.querySelectorAll(".card");
const circles = document.querySelectorAll(".circle");
const cardSpan = document.querySelectorAll(".card-span");
const basura = document.querySelectorAll(".basura");
const images = document.querySelectorAll(".rotate-image");

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