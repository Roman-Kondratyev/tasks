// На вход подается url. Необходимо вывести содержимое url после протокола
// (http/https)
// https://www.instagram.com/hschool.official/ -> www.instagram.com/hschool.official/

let a = `https://www.instagram.com/hschool.official/`;

alert(a.replace(`https://`, ``))
