window.onload = function () {
  var loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.style.display = "none";

  document.body.classList.remove("loading"); // Enable scrolling
};

// Add the 'loading' class to the body element when loading starts
document.body.classList.add("loading");
