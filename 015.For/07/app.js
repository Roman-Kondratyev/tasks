// Преобразуйте первую букву строки в верхний регистр несколькими способами

let a = `london in the capital of grate Britan`.toLowerCase();
// let  b = str[0].toUpperCase()
// alert (b)

for (let i = 0; i < a.length; i++) {
    if (i === 0) {
        alert(a[i].toUpperCase() + a.slice(1))
    }
}

alert(a[0].toUpperCase() + a.slice(1))