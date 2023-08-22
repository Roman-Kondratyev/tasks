// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values 

const obj = {
    id: `email`,
    name: `Romansobaka.com`,
    age: 23
}

const str = `email`;

function searchStr(obj, str) {
    try {
        const string = Object.values(obj);
        if (!string.includes(str)) throw new Error(`false`);
        return true
    } catch (error) {
        return error.message
    }
}

const result = searchStr(obj, str);
console.log(result);


