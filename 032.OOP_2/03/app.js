// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки

const obj = {
    id: 1,
    name: `Roman`,
    surname: `Kondratyev`
}

function doPar(obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count;
}
const result = doPar(obj);
console.log(result);

const new_arr = Object.values(obj);
console.log(new_arr);
console.log(new_arr.length);

