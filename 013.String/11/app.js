// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

// let a = prompt(`введите три слова через пробел`);

let a = `full stack developer`

console.log(a.length);

console.log(a.slice(a.indexOf(`s`)));
console.log(a.indexOf(`s`));