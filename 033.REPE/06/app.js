// 6. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив). Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении.

class Server {
    controller(obj) {
        try {
            const serv = this.service(obj);
            return serv;
        } catch (error) {
            return error.message
        }

    }
    service(obj){
        const rep = this.repository(obj);
        return rep;

    }

    repository(obj){
        const arr = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
        ]
        const new_arr = arr.filter((el) => el.email == obj.email);
        if (!new_arr.length) {
            arr.push(obj);
        }else {
            throw new Error ('error')
        }
        return arr;
    }

}

const server = new Server();
const obj = { "id": 6, "email": "Test", "age": 1 };
console.log(server.controller());

