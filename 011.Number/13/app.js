// Вы вводите значение с клавиатуры. Если значение равно 0, то вывести ‘Ноль’, если
// < 0, то вывести ‘Отрицательное’, если > 0, то вывести ‘Положительное’

let a = +prompt("введите число");

if (a === 0) {
    alert("ноль");
}

if (a < 0) {
    alert("отрицательное");
}

if (a > 0) {
    alert("положительное");
}

