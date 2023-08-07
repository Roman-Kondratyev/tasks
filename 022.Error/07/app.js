// Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9
// 2 === 81, 1
// 2=== 1)

const num = 9119;
function doArr(num) {
    try {
        if(isNaN(num)) throw new Error (`вы ввели не тоот тип данных`);
        let arr = num.split(``);
        const res = arr.map(function (el) {
            return el ** 2;
        })
        return res.join(``);
    } catch (error) {
        return error.message;
    }
}
let result = doArr(num);
console.log(result);