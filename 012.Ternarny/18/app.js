// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре


let a = prompt('введите строку');

alert (isNaN(a) ? a.toUpperCase() : 'это не строка');