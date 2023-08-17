// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

// const n = prompt(``);
// let arr = [];

// for(let i =0 ; i<n; i++){
//   arr.push(prompt(``))
// }

// const num = arr.reduce(function( sum ,el){
//   if(!isNaN(el)){
//     return sum * el;
//   };
//   else{
// return`ошибка ввода`
//   }
// },1);
// console.log(num);

const n = prompt(``);
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt(``))
}

let str = 1;
arr.ForEach(function (el) {
  if (!isNaN(el)) {
    return str * el;
  }else {
    return`ошибка ввода`
  }
})
console.log(str);