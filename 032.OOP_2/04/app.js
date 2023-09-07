// На входе статичный объект. Написать функцию на формирование массива
// значений данного объекта


const obj = {
    id: 1,
    name: `Roman`,
    surname: `Kondratyev`
}

function doArr(obj) {
    const arr =Object.values(obj);
    return arr;
}

const result = doArr(obj);
console.log(result);

