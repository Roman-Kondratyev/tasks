// У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

const arr = [1,2,3,4,`drink`,432, `vodka`];
const result = [];

for (let i =0; i<arr.length; i++){
    if(!isNaN(arr[i])){
        result.push(arr[i]);
    }
}
console.log(result);

// for(let el of arr){
//     if(!isNaN(el)){
//         result.push(el);
//     }
// }

// console.log(result);