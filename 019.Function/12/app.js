// На входе строка. Необходимо создать функцию,
// возвращающую true, если это слово палиндром и false в противном случае

const str = "Roman".toLowerCase();

const doPalindrom = (word) => word === word.split("").reverse().join("");

let result = doPalindrom(str);
console.log(result);