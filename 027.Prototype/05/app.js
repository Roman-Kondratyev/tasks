// . По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false


const btn = document.querySelector(`button`);
// const arr = [];
// const newarr = [];
// let count = 0;
btn.addEventListener(`click`, function () {
    const inp = document.querySelector(`input`);
    const array = document.querySelector(`.array`);
    const result = document.querySelector(`p`);
    // arr.push(inp.value);
    // newarr.push(array.value);
    // inp.value = ``;
    // array.value = ``;

    let str1 = inp.value;
    let str2 = array.value;
    let count = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) {
            count++
        }
    }
    if (str2.length === count) {
        result.innerHTML = 'true';
    } else {
        result.innerHTML = 'false';
    }

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr.includes(newarr[i])) {
    //         count++
    //     }
    // }
    // console.log(count > 2 ? true : false);
    // result.innerHTML = newarr;
})