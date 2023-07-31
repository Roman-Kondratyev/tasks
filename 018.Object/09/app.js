// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//   значение) где значение число и вывести количество 

const obj = {
  name: `Roman`,
  age: 22,
  weight: 84,
  height: 177
};

let count = 0;

for (let key in obj) {
  if (!isNaN(obj[key])) {
    count++;
  }
}
console.log(count);