// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE

const obj = {
    n: 2,
    id: 7,
    str: 'hello',
};

(function () {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    console.log(count);
}(obj))