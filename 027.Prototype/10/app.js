// На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае 

const obj={
id: `email`,
name: `Romansobaka.com`,
age: 23
}

const str = `id`;
const bool = Object.hasOwnProperty(str);
console.log(bool);