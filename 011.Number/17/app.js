// Пользователь вводит с клавиатуры 2 числа: a и b. Проверьте, что a делится без
// остатка на b. Если это так - выведите 'Делится' и результат деления, иначе
// выведите 'Делится с остатком' и остаток от деления

let a = +prompt("введите значение");

let b = +prompt("введите значение");

a % b === 0? alert("делится", a / b): alert("делится с остатком", a / b);