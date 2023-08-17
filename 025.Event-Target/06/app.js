// Вывести в строчку все вводимые значения
//  через инпут в виде массива. 
// Добавить проверку, что поле не пустое. 
// После каждого клика очищать значение input.
//  Если вводимое значение не проходит валидацию, 
// то на месте массива вывести сообщение об ошибке красным цветом 

const btn = document.querySelector(`button`);

function isValid(inp){
   if(!inp) throw new Error (`error`)
}

btn.addEventListener(`click`, function () {
   try{
   const inp = document.querySelector(`input`);
   isValid(inp.value);
   const div = document.querySelector(`div`);
   const reverse = inp.value.split(``).reverse().join(``);
   if(inp.value === reverse){
      div.innerHTML = `Палиндром`
   }else{
      div.innerHTML = `Повторите снова`
   }
}catch(error){
   alert(error.message)
}

})