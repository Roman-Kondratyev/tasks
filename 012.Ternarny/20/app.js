// Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false

let a=prompt('введите значение');

if(isNaN(a)){
    console.log(a=='hschool'? true:false);
}else{
    console.log(a%2==0?'Четное':'Нечетное');
}