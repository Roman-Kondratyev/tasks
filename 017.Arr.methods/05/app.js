// . На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false

let arr = [];
let arr2= []
for (let i = 0; i < 6; i++){
    arr.push(prompt(``))
}

for( let i = 0; i<6; i++){
    arr2.push(prompt(``))
}

arr2 === arr ? true: false;