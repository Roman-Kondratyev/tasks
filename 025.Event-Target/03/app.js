// По двойному клику на кнопку изменить цвет кнопки

const btn = document.querySelector(`button`);
let flage = false;
btn.addEventListener(`dblclick`, function(){
   if(flage === false){
   btn.style = `background-color:red`;
   }else{
      btn.style = `background-color:white`;
      flage = false;
   }
})