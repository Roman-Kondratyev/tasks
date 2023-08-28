// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.

class WordString {
    isValid(str) {
        if (!isNaN(str)) throw new Error(`Вы передали число`);
    }

    reverseString(str) {
        try {
            this.isValid(str);
            let reverse = str.split(``).reverse().join(``);
            return reverse;
        } catch (error) {
            return error.message;
        }
    }

    upperFirst(str) {
        try {
            this.isValid(str);
            let upper = str[0].toUpperCase() + str.slice(1);
            return upper;
        } catch (error) {
            return error.message;
        }
    }

    upperEvery(str) {
        try {
            this.isValid(str);
            let strArr = str.split(` `);
            let newStr = ``
            for (let i = 0; i < strArr.length; i++) {
                newStr += strArr[i][0].toUpperCase() + strArr[i].slice(1) + ` `;
            }
            return newStr;
        } catch (error) {
            return error.message;
        }
    }
}

const wordString = new WordString();

const reverse = wordString.reverseString(`test`);

const upper = wordString.upperFirst(`test`);

const upperall = wordString.upperEvery(`test test`);

console.log(reverse);

console.log(upper);

console.log(upperall);