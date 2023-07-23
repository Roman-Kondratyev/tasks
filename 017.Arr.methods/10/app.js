// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map
const n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
  let element = prompt();
  if (!isNaN(element)) {
    arr.push(element);
  }
}

let sum = 1;
arr.forEach(function (el) {
  sum *= el;
});

console.log(sum);

// const num = arr.reduce(function (sum, el) {
//   if (!isNaN(el)) {
//     return sum * el;
//   }
// }, 1);
