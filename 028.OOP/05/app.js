// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
//     замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
//     если слова являются анаграммами. Добавить проверки на ввод

class Anagram {
    constructor(an1, an2) {
        this.an1 = an1;
        this.an2 = an2;
    }
    
    doCheck() {
        return (this.an1.split(``).sort().join(``) === this.an2.split(``).sort().join(``) ? true : false);
    }
}


const anagram = new Anagram(`пилf`, `липа`);
const result = anagram.doCheck();
console.log(result);
