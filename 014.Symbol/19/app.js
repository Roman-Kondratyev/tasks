// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4; Г – 2; Ц – 3; Т – 5 


let a='АааГГЦЦцТТтттА';


let b=0;
let c=0;
let d=0;
let h=0;


for (let i = 0; i < a.length; i++) {
    a[i]=='а'||a[i]=='А'?b++:b+=0;
    a[i]=='г'?c++:c+=0;
    a[i]=='ц'?d++:d+=0;
    a[i]=='т'?h++:h+=0; 
}

console.log(`A - ${b}; Г - ${c}; Ц - ${d}; Т - ${h}`)