// . Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
// вывести день для введенного числа.
// 1 -> Понедельник


let a = +prompt("введите число от 1 до 7");

switch (a) {
    case 1:
        alert(`понедельник`);
        break;

    case 2:
        alert(`вторник`);
        break;

    case 3:
        alert(`среда`);
        break;

    case 4:
        alert(`четверг`);
        break;

    case 5:
        alert(`пятница`);
        break;

    case 6:
        alert(`суббота`);
        break;

    case 7:
        alert(`воскресенье`);
        break;

    default:
        alert(`некоректные данные`)
        break;
}



