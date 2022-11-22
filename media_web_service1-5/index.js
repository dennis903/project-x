import appendPopUp from "./popup.js";

const titles = document.querySelectorAll(".title");
const contents = document.querySelectorAll(".content");
const details = document.querySelectorAll(".detail");
const images = document.querySelectorAll("img");

const showPopUp = (element) => {
  const body = document.querySelector("body");
  const title = element.firstChild.innerText;
  body.appendChild(appendPopUp(title));
};

titles.forEach((element) => {
  element.addEventListener("click", () => showPopUp(element));
});

details.forEach((detail, index) => {
  detail.addEventListener("click", (event) => pageChangeHandler(event, index));
});

const pageChangeHandler = (event, index) => {
  event.preventDefault();
  location.href = `${index + 1}.html`;
};
