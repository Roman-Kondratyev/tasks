// Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

function name(a, b) {
    return `Привет, ${a} ${b}`
}

const result = name_(`Роман`, `Кондратьев`)
console.log(result);

const result_1 = name_2(`Настя`, `Паныш`);
console.log(result_1);