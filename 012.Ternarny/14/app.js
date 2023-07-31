// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы

let a = prompt('введите строку').trim();
let str = `hshcool`;


if (!isNaN(a)) {
    alert(`ошибка`);
} else {
    alert(a = str ? true : false);
}