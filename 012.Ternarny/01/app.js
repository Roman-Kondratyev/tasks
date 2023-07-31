// Найти максимальное число из 2 введенных (2 способа)


let a = +prompt("введите значение a");

let b = +prompt(`введите значение b`);

// if (a > b ) {
//     alert(a);
// } else{
//     alert(b);
// } 

a > b ? alert(a) : alert(b);
alert(Math.max(a, b));

