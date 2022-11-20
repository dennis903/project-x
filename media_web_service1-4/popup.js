const newPopUp = document.createElement("div");
const newPopUpH1 = document.createElement("h1");
const exitButton = document.createElement("button");

export default function appendPopUp(title) {
  newPopUpH1.innerText = title;
  newPopUp.id = "popUp";
  newPopUp.appendChild(newPopUpH1);
  newPopUp.appendChild(createButton());
  return newPopUp;
}

function createButton() {
  exitButton.innerText = "exit";
  exitButton.addEventListener("click", exitPopUp);
  return exitButton;
}

function exitPopUp() {
  newPopUp.remove();
  newPopUpH1.remove();
  exitButton.remove();
}
