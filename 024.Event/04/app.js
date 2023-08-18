const btn = document.querySelector(`button`);

function isValid(inp) {
    if (!inp.value)  throw new Error(`повторите ввод данных`);
    
}
btn.addEventListener(`click`, function () {
    try {
        const inp = document.querySelector(`input`);
        isValid(inp);
        alert(inp.value);
    } catch (error) {
        alert(error.message);
    }
})