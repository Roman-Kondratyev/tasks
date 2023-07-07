// . На вход подается строка из нескольких слов. Необходимо преобразовать каждое
// предложение в хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

let a = `hSСhOol СomPAnY`.toLowerCase().replace(` `, ``);

alert(isNaN(a) ? a.replace(``, `#`): null);