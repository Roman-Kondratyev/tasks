// На вход подается строка. Необходимо сложить все элементы числа. Добавить
// проверку на ввод только чисел
// 53 -> 8
// 135 -> 9

let a = prompt(`введите число`);
let b = 0;

if (isNaN(a)) {
    alert(`повторите попытку`);
} else {
    for (let i = 0; i < a.length; i++) {
        b = b + +a[i]
    }
}
alert(b);