// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

let a = prompt(`введите url`);

alert(a.includes(`http`) && a.includes(`/`) && a.includes(`.com`) || a.includes(`.ru`) ?  true : false );