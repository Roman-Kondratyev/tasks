// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)



let a = prompt(`введите число`);

if(isNaN(a)){
    alert("ошибка ввода данных");
}else{
    a=Number(a);
    switch (a) {
    case 1:
        alert(`лето`);
        break;
    case 2:
       alert(`осень`);
       break;
    case 3:
         alert(`зима`);
         break;
    case 4:
        alert(`весна`);
   
        break;

    default:
        alert(`ошибка сезона`)
        break;
}

}





