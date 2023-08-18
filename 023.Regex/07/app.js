// 7. На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов

const password = "Kondratyev@gmail.1515";

function doCheckPass(passworcod) {
    try {
        if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/gm.test(password)){
           throw new Error("ошибочный пароль"); 
        }
        return true;
    } catch (error) {
        return error.message;
    }
}

const result = doCheckPass(password);
console.log(result);