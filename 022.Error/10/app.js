// На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const pass = `roman@gmail.com`;
function checkPass(pass) {
    try {
        if (!pass.includes(`@`)) throw new Error(`неверная почта`);
        return true;
    } catch {
        return error.message;
    }
}

const result = checkPass(pass);
console.log(result);
