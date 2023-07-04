// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

let a = `aaa bbb ccc`;

// alert(a.split(`bbb`).join(``));

let b = a.indexOf(`b`);

let c = a.lastIndexOf(`b`);

alert(a.slice(b, c+1));