// На входе статичный объект. Необходимо числовые значения удвоить на выходе.

const obj = {
  1: `test`,
  2: `test2`,
  age: 22,
  3: 3,
  4: 4,
  5: 5,
  6: 6
};

const arr = [];

for (let key in object) {
  if (!isNaN(obj[key])) {
    arr.push(obj[key] * 2);

  }
}

console.log(arr);