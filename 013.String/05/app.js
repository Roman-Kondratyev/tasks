// Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы

let a = prompt(`введите строку`).trim();

if(isNaN(a))
alert( !isNaN(a)? `ошибка ввода данных`: a[0].toUpperCase()+ a.slice(1))