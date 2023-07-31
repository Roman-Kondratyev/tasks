// На входе статичный объект. Необходимо вывести все четные значения объекта.

const obj = {
  1: `test`,
  2: `test2`,
  age: 22,
  3: 3,
  4: 4,
  5: 5,
  6: 6
};


for (let key in obj) {
  if (obj[key] % 2 === 0) {
    console.log(obj[key]);
  }
};