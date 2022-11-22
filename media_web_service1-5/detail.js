const more = document.querySelector("#more");
const onClickMore = (event) => {
  event.preventDefault();
  const content = document.querySelector(".thumbnail__content__text");
  content.classList.remove("thumbnail__content__text");
  content.classList.add("thumbnail__content__more");
  more.style.display = "none";
};

more.addEventListener("click", onClickMore);
