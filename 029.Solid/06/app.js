// Реализуйте класс ServerPut. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1, "name": "Test", "age": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки 

class ServerPut {
    controller(obj) {
        try {
            const con = this.service(obj);
            return con;
        } catch (error) {
            return error.message
        }

    }

    service(obj) {
        const serv = this.repository(obj);
        return serv;
    }

    repository(obj) {
        const arr = [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Maria", "age": 27 }
        ]

        const res = arr.filter((el) => el.id === obj.id)
        if (res.length !== arr.length) {
            res.push({...obj})
        }
        return res;
    }

}

const serverPut = new ServerPut()
const obj = JSON.parse(`{ "id": 1, "name": "Test", "age": 1 }`);
const result = serverPut.controller(obj);
console.log(result);