// При наведении на картинку изменять ее

const image = document.querySelector(`.img`);

image.addEventListener(`mouseover`, function () {
  image.style = "background-image: url(./p2943137757-4.jpg)";
})

image.addEventListener(`mouseout`, function () {
  image.style = "background-image: url(./og_og_148879361322373683.jpg);";
})