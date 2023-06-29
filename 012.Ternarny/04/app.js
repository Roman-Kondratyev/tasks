// Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
// в противном случае false (isNaN)

let a = +prompt("введите значение");


if (isNaN(a)) {
    alert("false");
} else{
    alert(`true`)
}

isNaN(a)? alert("false") : alert("true");

alert( isNaN(a)? "false" : "true")




