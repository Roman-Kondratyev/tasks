// Вы вводите строку. Проверить является ли это
//  слово палиндром. Добавить проверки

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