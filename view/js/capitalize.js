const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  const nombreInput = document.querySelector('input[name="Nombre"]');

  nombreInput.value =
    nombreInput.value.charAt(0).toUpperCase() + nombreInput.value.slice(1);
});
