// Дан статичный массив с элементами и число вводимое с клавиатуры. С помощью
// цикла for и оператора if проверьте есть ли в массиве введенное число. Если есть,
// то остановите выполнение цикла. Если нет, то найдите среднее арифметическое
// всех чисел до введенного


let a = [1, 2, 3, 5, 10];
let b = 5;
let sum = 0; //эту переменную создали для подсчета суммы цифр массива
let count = 0; //эту переменную создали для подсчета количества цифр в массиве
for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
        break; //здесь если ввели значение 5 , то еаше условие закрывается
    } else {
        sum = sum + a[i];
        count = count + 1;
    }
}
console.log(sum / count);