// У вас есть массив из строк, чисел и иных примитивов.
// Необходимо создать новый массив, заполненный только числами первоначального массива

const arr = [15, 12, 13, ``, London, 54, `fly`];

let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === Number(arr[i])) {
    result.push(arr[i]);
  }
}
console.log(result);