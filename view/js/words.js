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
