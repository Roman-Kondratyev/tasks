// Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 5 циклом while

const arr = [2, 5, 9, 15, 0, 4];
const result = [];

let i= 0;

while(i<arr.length){
if(arr[i]%5=== 0){
result.push(arr[i])
}
    i++
}

console.log(result);