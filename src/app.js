/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generateColor() {
    const hexColors = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      const posionAleatoria = Math.floor(Math.random() * hexColors.length);
      color = color + hexColors[posionAleatoria];
    }
    return color;
  }

  const cardElement = document.querySelector(".card");
  cardElement.classList.add("mt-5");

  const colorElementHtml = document.querySelector("#color-generated");

  const newColor = generateColor();

  colorElementHtml.classList.remove("bg-black");
  colorElementHtml.style.backgroundColor = newColor;

  const colorTextParagraph = document.querySelector("#color-text");

  colorTextParagraph.innerHTML = `Color: <strong>${newColor}</strong>`;
};
