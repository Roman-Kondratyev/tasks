// На входе пустой объект. С клавиатуры вводятся 2 числа. Необходимо добавить в
// объект ключ “avg” со значением среднего арифметического введенных с чисел


const obj = {};

let a = +prompt(``);
let b = +prompt(``);
obj.avg = (a+b)/2

console.log(obj);