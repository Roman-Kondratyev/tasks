// На входе статичный объект. Необходимо сформировать массив из всех нечетных
// ключей объекта.

const obj = {
  1: `test`,
  2: `test2`,
  3: 3,
  4: 4,
  5: 5,
  6: 6
};

const arr = [];

for (let key in obj) {
  if (key % 2 != 0) {
    arr.push(key)
  }
}

alert(arr);