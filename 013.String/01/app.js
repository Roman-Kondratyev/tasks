// Ввести строку. Проверить является ли это число или строка. Если число, то
// выяснить, четное или нет. Если это строка то преобразовать строку в массив, где
// каждый символ – один элемент массива
// ‘hschool’ => [‘h’, ‘s’, ‘c’, ‘h’, ‘o’, ‘o’, ‘l’]

let a = prompt(`введите строку`)

if(isNaN(a)){
    alert(a.split(``));
}else{
    alert( a%2===0? `четное`: `нечетное`);
}