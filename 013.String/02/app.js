// Преобразовать строку ‘ Full StaCK DevELoper ’ в массив вида [‘full, ‘stack’,
//     ‘developer’]

let a = prompt("введите строку").toLowerCase().trim;

if (!isNaN(a)) {
    alert("ошибка ввода данных");
} else {
    alert(a.split(" "));
}
