// Дан массив с элементами . С помощью цикла for и оператора if
// проверьте есть ли в массиве элемент со значением, равным 4. Посчитать
// количество повторений числа 4 в массиве

let a = [1, 2, 5, 9, 4, 13, 4, 10];
let b=4;
let c=0
for(let i=0; i<a.length; i++){
    if(b===a[i]){
        c++
    }
}
console.log(`есть, в количестве`+ ` ` + c+ ` ` +`шт`)