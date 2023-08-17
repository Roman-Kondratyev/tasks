// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

const n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
  let value = +prompt();
  arr.push(value);
}

const arr_2 = arr.filter(function (el) {
  return el> 0 ? true : false
})
console.log(arr_2);