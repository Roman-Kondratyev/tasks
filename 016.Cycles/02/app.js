// [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
 alert(arr[i]);
}

for (let el of arr) {
  alert(el);
}

let i = 0;
while (i < arr.length) {
  alert(arr[i]);
  i++;
}