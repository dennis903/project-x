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
  const data = {};

  data["title"] = titles[index].firstChild.innerText;
  data["content"] = contents[index].firstChild.textContent;
  data["img"] = images[index].src;
  detail.addEventListener("click", (event) => sendToDetail(event, data));
});

const sendToDetail = (event, data) => {
  event.preventDefault();
  location.href = `detail.html?${JSON.stringify(data)}`;
};
