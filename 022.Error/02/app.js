// На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение. 

const arr = [1, 2, 3, `error`, 5, 8];

function doArr(arr) {
    try {
        let new_arr = arr.some(function (el) {
            if (isNaN(el)) throw Error(`в массиве есть строки`);
        })
        return true
    } catch (error) {
        return error.message;
    }
}

const result = doArr(arr);
console.log(result);