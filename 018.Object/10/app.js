// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//   значение) где значение число и вывести количество 

const obj = {
  name: ``,
  age: ``,
  birthday: ``,
};

for (let key in obj) {
let a= prompt(`введите значение ${key}`)
obj[key] = a;
}
console.log(obj);