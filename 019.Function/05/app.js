// На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [1, 3, 4, 5, 5, 7, 13];

function isTrue(a) {
    let result2 = a.every(function (el) {
      !isNaN(el);
    });
    return result2;
  }
  let result = isTrue(arr);
  console.log(result);

// function isTrue(a) {
//     for (let i = 0; i < a.length; i++) {
//         !isNaN(a[i]) ? true : false;
//         a[i] != true ? false : true
//     }
//     return b;
// }

// let result = isTrue(arr)
// console.log(result);