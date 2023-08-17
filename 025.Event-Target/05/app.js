// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо ее изменять 
// на другую картинку.
//  Но как только мышка снова отходит в сторону, то возвращается первая картинка

const image = document.querySelector(`.img`);

image.addEventListener(`mouseover`, function(){
  image.style ="background-image: url(./p2943137757-4.jpg)";
})

image.addEventListener(`mouseout`, function(){
   image.style ="background-image: url(./og_og_148879361322373683.jpg);";
 })