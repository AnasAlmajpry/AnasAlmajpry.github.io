const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const h3 = document.querySelector("h3");
let body = document.querySelector("body");

function changeBackground() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
