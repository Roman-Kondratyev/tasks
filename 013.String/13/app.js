// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.

let a = `xxxx-xx-xx`;

alert(a.split(`-`).reverse().join(`.`));