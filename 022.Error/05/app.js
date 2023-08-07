// На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи

const arr = JSON.parse(`[
    { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
]`);

function parsArr(arr) {
    try {
        if (!Array.isArray(arr)) {
            throw new Error(`не является массивом`);
        }
        let res = arr.filter(function (el) {
            return el.id % 2 === 0;
        });
        return res;
    } catch {
        return error.message;
    }
}
let result = parsArr(arr);
console.log(result);
