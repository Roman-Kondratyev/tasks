// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some

let n = prompt(``);
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt(``));
};

let result = arr.some(function (el) {
    return !isNaN(el) ? true : false;
})

console.log(result);