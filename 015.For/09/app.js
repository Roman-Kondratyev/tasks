// На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный прямоугольник размерами n×10 несколькими способами.
// 2 -> **********
//      **********

let a =`**********`;
let b= +prompt(`введите число`);
let result = ``;

for(let i= 1; i<=b; i++){
    // console.log(`*`.repeat(10));

result+= a + `\n` ;
// result+= a + <br> ;
}
console.log(result);