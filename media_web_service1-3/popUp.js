"use strict";

const titleList = document.querySelectorAll(".title");
const popup_title = document.querySelector("#popup_title");
console.log(popup_title);
const popUp = (element) => {
  const title = element;
};

titleList.forEach((element) => {
  element.addEventListener("click", () => popUp(element.firstChild.innerText));
});
