// Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так -
// выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и
// само значение деления


let a = +prompt("введите значение");

let b = +prompt("введите значение");

if(a%b===0){
    console.log("делится", a/b);
} else{
    console. log("делится с остатком", a/b);
}