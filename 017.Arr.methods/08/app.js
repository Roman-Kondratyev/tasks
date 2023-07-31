// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach


let n = prompt(``);

let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt(``));
};

// let result = [];

// arr.forEach(function(el){
//     isNaN(el)? false : true;
// });

const result = arr.every(function (el) {
    return isNaN(el) ? false : true;
});
console.log(result);