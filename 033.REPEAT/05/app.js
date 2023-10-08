// Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив репозитория класса Server


class Client {
    doRegistration() {
        const getlog = {
            email: ``,
            password: ``
        }

        const btn = document.querySelector("button");
        btn.addEventListener("click", () => {
            const inpEmail = document.querySelector(`.email`);
            const inpPass = document.querySelector(`.password`);

            getlog.email = inpEmail.value;
            getlog.password = inpPass.value;
        })
console.log(getlog);
    }

}

const client = new Client();
client.doRegistration()




