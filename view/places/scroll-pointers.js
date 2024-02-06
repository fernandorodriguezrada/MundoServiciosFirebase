const pointerLara = document.querySelector(".pointer-lara");
const pointerMiranda = document.querySelector(".pointer-miranda");
const pointerCarabobo = document.querySelector(".pointer-carabobo");
const pointerZulia = document.querySelector(".pointer-zulia");
const pointerMonagas = document.querySelector(".pointer-monagas");

pointerLara.addEventListener("click", () => {
  const lineLara = document.getElementById("lara");
  lineLara.scrollIntoView({ behavior: "smooth" });
});

pointerMiranda.addEventListener("click", () => {
  const lineMiranda = document.getElementById("miranda");
  lineMiranda.scrollIntoView({ behavior: "smooth" });
});

pointerCarabobo.addEventListener("click", () => {
  const lineCarabobo = document.getElementById("carabobo");
  lineCarabobo.scrollIntoView({ behavior: "smooth" });
});

pointerZulia.addEventListener("click", () => {
  const lineZulia = document.getElementById("zulia");
  lineZulia.scrollIntoView({ behavior: "smooth" });
});

pointerMonagas.addEventListener("click", () => {
  const lineMonagas = document.getElementById("monagas");
  lineMonagas.scrollIntoView({ behavior: "smooth" });
});
