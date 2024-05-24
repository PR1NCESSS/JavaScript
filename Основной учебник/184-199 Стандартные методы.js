// 184 Дан следующий массив: [4, 2, 5, 19, 13, 0, 10] Найдите квадратный корень из суммы кубов его элементов.Для решения воспользуйтесь циклом for.
let arr = [4, 2, 5, 19, 13, 0, 10];
let res = 0;
for (let elem of arr) {
  res += Math.pow(elem, 2);
}
console.log(Math.sqrt(res));

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
console.log(Math.sqrt(379).toFixed());
console.log(Math.sqrt(379).toFixed(1));
console.log(Math.sqrt(379).toFixed(2));

// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
let obj = {
  'floor': Math.floor(Math.sqrt(587)),
  'ceil': Math.ceil(Math.sqrt(587)),
}
console.log(obj);

// 185 Выведите на экран случайное целое число от 1 до 100.
console.log(Math.floor(Math.random() * 100) + 1);

// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let str = 'я учу javascript!';
console.log(str.substr(2, 3));
console.log(str.substr(6, 10));
console.log(str.substring(2, 5));
console.log(str.substring(6, 16));
console.log(str.slice(2, 5))
console.log(str.substring(6, 16));

// 191 Дана строка. Проверьте, начинается ли эта строка на 'http://'.
let str = 'http://example.com';
if (str.startsWith('http://')) {
  console.log('Строка начинается с "http://".');
} else {
  console.log('Строка не начинается с "http://".');
}

// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
let str = 'http://example.com';
if (str.endsWith('.html')) {
  console.log('Строка начинается с "http://".');
} else {
  console.log('Строка не начинается с "http://".');
}

// 192 Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
let str = '1-2-3-4-5';
let newStr = str.replace(/-/g, '.');
console.log(newStr); 

// 193 Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
let str = '1-2-3-4-5';
let arr = str.split('-');
console.log(arr); 

// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let str = '12345';
let arr = str.split('');
console.log(arr); 

// Дан следующий массив: let arr = [1, 2, 3, 4, 5]; С помощью метода join слейте его в строку '1-2-3-4-5'.
let arr = [1, 2, 3, 4, 5];
console.log(arr.join('-'));

// 195 Дан следующий массив: [1, 2, 3, 4, 5] Сделайте из этого массива следующий: [1, 2, 3]
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(0, 3);
console.log(newArr);

// [1, 2, 3, 4, 5] Используя этот массив, запишите в новую переменную следующий массив: [4, 5]
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(-2);
console.log(newArr);

// 196 Дан следующий массив: [1, 2, 3, 4, 5] С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

// Дан следующий массив: [1, 2, 3, 4, 5] С помощью метода splice сделайте из него массив: [1, 2, 3, 'a', 'b', 'c', 4, 5]
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

// Дан следующий массив: [1, 2, 3, 4, 5] С помощью метода splice сделайте из него массив: [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.push('e');
console.log(arr);

// 197 Дан следующий массив: [1, 2, 3, 4, 5] Проверьте, есть ли в этом массиве число 3.
let arr = [1, 2, 3, 4, 5];
let isThreePresent = arr.includes(3);
if (isThreePresent) {
  console.log('Число 3 присутствует в массиве.');
} else {
  console.log('Число 3 отсутствует в массиве.');
}

// 198 Дан объект: let obj = { a: 1, b: 2, c: 3 }; Получите массив его ключей.
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));

// 199 Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
  sum += +digit;
}
console.log(sum);

// Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
  sum += +digit;
}
console.log(sum);

// Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}
console.log(sum);

// Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}

console.log(sum);

// Код должен найти произведение цифр числа:
let num = 12345;
let arr = String(num).split('');
let prod = 1;
for (let digit of arr) {
  prod *= digit;
}
console.log(prod);



