// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое


const btn = document.querySelector(`button`);

function isValid(inp) {
    if (isNaN(inp)) throw new Errro(`ОШИБКА, введено не число`);
    if (inp <= 0) throw new Errro(`ОШИБКА, введено число меньше 0`);
}

btn.addEventListener(`click`, function () {
    const inp = document.querySelector(`input`);
    const div = document.querySelector(`div`);
    try {
        isValid(inp.value)
        div.innerHTML = inp.value * 2;
    } catch (error) {
        alert(error.message)
    }
inp.value =``
})

