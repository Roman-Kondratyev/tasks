// Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
// элементов этого массива.

const arr = [2, 3, 4, 5];
let num =1

// for(let i= 0; i<arr.length; i++){
// num*= arr[i];
// }
// console.log(num);

// for(let el of arr){
//     num*= el;
// }
// console.log(num);

let i= 0;
while(i<arr.length){
    num*= arr[i];
    i++;
}
console.log(num);