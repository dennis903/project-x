import appendPopUp from "./popup.js";

const titles = document.querySelectorAll(".title");

const showPopUp = (element) => {
  const body = document.querySelector("body");
  const title = element.firstChild.innerText;
  body.appendChild(appendPopUp(title));
};

titles.forEach((element) => {
  element.addEventListener("click", () => showPopUp(element));
});
