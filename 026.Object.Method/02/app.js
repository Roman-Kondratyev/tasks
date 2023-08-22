// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки 

const obj = {
    id: `email`,
    name: `Romansobaka.com`,
    age: 23
}

function count(obj) {
    try {
        const parCount = Object.entries(obj).length;
        if (parCount === 0)  throw new Error(`объект пустой`)
        return parCount
    } catch (error) {
        return error.message
    }
}
const result = count(obj);
console.log(count);