// На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения
// { {
// 0 : 7, 0 : 7,
// 1 : 7, 1 : 6,
// 2 : 6, 2 : 5,
// 3 : 5, -> 3 : 2,
// 4 : 2, 4 : 1
// 5 : 2 }
// 6 : 1
// }

const obj = {
  0: 7,
  1: 7,
  2: 6,
  3: 5,
  4: 2,
  5: 2,
  6: 1
}
let arr = [];
let newobj = {};

for (let key in obj) {
  arr.push(obj[key]);
}

// for (let i = 0; i < arr.length; i++) {
// obj[i] == arr[i]? null : newobj[i] = arr[i] ;
// }

let arr2 = [];
arr.forEach(function (el) {
  arr2.includes(el) ? null : arr2.push(el);
});

for (let i = 0; i < arr2.length; i++) {
  newobj[i] = arr2[i];
}

console.log(newobj);