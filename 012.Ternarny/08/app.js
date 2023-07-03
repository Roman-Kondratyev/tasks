// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)



let a = +prompt(`введите номер месяца`);




switch (a) {
    case 1:
    case 2:
        alert(`зима`);
        break;
    case 3:
    case 4:
    case 5:
        alert(`весна`);
        break;
    case 6:
    case 7:
    case 8:
        alert(`лето`);
        break;
    case 9:
    case 10:
    case 11:
        alert(`осень`);
        break;
    case 12:
        alert(`зима`);
        break;
    case 13:
        alert(`очень остроумно)`);
        break;
    default:
        alert(`такого месяца не существует`);
        break;
}