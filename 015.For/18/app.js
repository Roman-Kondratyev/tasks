// На вход подается число произвольной длины. Необходимо обратиться к каждому
// значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет

let a = +prompt(`введите число`);
let b = ``;
// let c = ``
for (let i = 0; i < a.length; i++) {
b+= (a[i]%2 === 0 ? ` ${a[i]}-чет ` : ` ${a[i]}-неч `);
    // if(a[i]%2===0){
    //     b += +a[i]+ `чет`
    // }else if(a[i]%2!==0){
    //     c += +a[i]+ `нечет`
    // }
}
console.log(b);