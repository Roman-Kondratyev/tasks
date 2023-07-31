//На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение)

const obj = {
  1: `test`,
  2: `test2`,
  age: 22,
};
// const arr =[];

// for (let key in obj) {
//   if (obj[key]) {
//     arr.push(obj[key]);
//   }
// }

let arr = 0;

for (let key in obj) {
  if (obj[key]) {
    arr++;
  }
}

console.log(arr);