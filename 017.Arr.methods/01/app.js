// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter

let arr= [];

for(let i = 0; i<5; i++){
      arr.push(prompt(``));
  }

  let result = arr.filter(function(el){
    return !isNaN(el) ? true : false
   });

   result.length === 0? console.log(`массив пуст`): console.log(result);
   
   console.log (result);