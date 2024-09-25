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

  const generateCard = () => {
    let cardElement = document.createElement("div");
    // cardElement.classList = "card mx-auto mt-5";
    cardElement.classList.add("card");
    cardElement.classList.add("mx-auto");
    cardElement.classList.add("mt-2");

    cardElement.style.width = "300px";

    const newColor = generateColor();

    let backgroundDivElement = document.createElement("div");
    backgroundDivElement.style.width = "100%";
    backgroundDivElement.style.height = "300px";
    backgroundDivElement.style.backgroundColor = newColor;
    backgroundDivElement.style.display = "flex";
    backgroundDivElement.style.flexDirection = "column";

    const textColorElement = document.createElement("strong");
    textColorElement.style.marginTop = "auto";
    textColorElement.style.marginBottom = "auto";

    textColorElement.innerText = newColor;

    backgroundDivElement.style.color = "white";
    backgroundDivElement.appendChild(textColorElement);

    backgroundDivElement.style.textAlign = "center";

    cardElement.appendChild(backgroundDivElement);
    return cardElement;
  };

  const colorContainerElement = document.querySelector("#color-container");
  let colorCard = generateCard();

  colorCard.id = "first-color";

  colorContainerElement.appendChild(colorCard);

  const buttonElement = document.querySelector("#first-button");

  function whatHappensOnClick(evento) {
    const newColorCard = generateCard();
    colorContainerElement.replaceChild(newColorCard, colorCard);
    colorCard = newColorCard;
  }

  buttonElement.addEventListener("click", whatHappensOnClick);
};
