// На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschool

let a = `hSChool`.toLowerCase();
alert(isNaN(a) ? a.replace(``, `#`) : null);