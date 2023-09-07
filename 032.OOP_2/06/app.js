// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое


const btn = document.querySelector(`button`);

function isValid(inp) {
    if (!inp) throw new Errro(`ОШИБКА, поле ввода пустое`);
}
const arr = [];
btn.addEventListener(`click`, function () {
    const inp = document.querySelector(`input`);
    const div = document.querySelector(`div`);
    try {
        isValid(inp.value)
        
        arr.push(inp.value);
        div.innerHTML = arr;
    } catch (error) {
        alert(error.message)
    }
    inp.value = ``;
})

