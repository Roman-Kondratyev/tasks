// 16. *На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить проверки на ввод числа
// (значение n не должно быть больше длины массива, 0, пустая строка, строковый
// тип данных). Использовать любой цикл / метод перебора массива

const arr = [1, 2, 3, 4, 5, 6];
const n = 5;

if (!isNaN(n)) {
    let result = [];
    let temporaryArr = [];
    for (let i = 0; i < arr.length; i++) {
      temporaryArr.push(arr[i])
  
        if (temporaryArr.length === n) {
            result.push(temporaryArr);
            temporaryArr = [];
        }
    }
    temporaryArr.length === 0 ? null : result.push(temporaryArr);
    console.log(result);
  } else {
    console.log('ошибка ввода');
  }