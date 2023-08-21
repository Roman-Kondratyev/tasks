// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи.


const btn = document.querySelector(`button`);
btn.addEventListener(`click`, function(){
    const inp = document.querySelector(`input`);
    const div = document.querySelector(`div`);
    div =inp.value.split(``);
    if(!isNaN(inp)){
        alert(`Фибоначи`);
    }else{
        alert(`это не число`);
    }
})
