// Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо вывести все числа кратные 3 

const arr = []
const btn = document.querySelector(`button`);
btn.addEventListener(`click`, () => {
    const inp = document.querySelector(`input`);
    const array = document.querySelector(`.array`);
    const result = document.querySelector(`.result`);
    arr.push(inp.value);
    inp.value = ``;
    array.innerHTML = arr;
    result.innerHTML = arr.filter((el) => el % 3 === 0);
})
