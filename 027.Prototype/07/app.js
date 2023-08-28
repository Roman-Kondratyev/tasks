// Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах


const btn = document.querySelector(`button`);

btn.addEventListener(`click`, function () {
    const count = document.querySelector(`.count`);
    const distance = document.querySelector(`.distance`);
    const width = document.querySelector(`.width`);
    const res = document.querySelector('.result');
    if (count.value >= 0 && distance.value >= 10 && distance.value <= 30 && width.value <= 50 && width.value >= 10) {
        res.innerHTML = ((count.value - 1) * (distance.value * 100)) + (count.value * width.value);
    } else {
        alert(`Проверьте введенные данные, количество столбов должно совпадать со значением:(≥ 1);
         расстояние между столбами должно быть: (10 – 30 метров); 
         ширина столба должна быть: (10 – 50 сантиметров)`)
    }
})