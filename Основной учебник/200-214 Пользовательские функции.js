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

// 200 Сделайте функцию, выводящую в консоль ваше имя.
function writeName() {
  console.log('Timur');
}

// Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.
function sumNumbers() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log('Сумма чисел от 1 до 100 равна:', sum);
}
sumNumbers();

// 201 Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.
function cubeNumber(num) {
  let cube = num ** 3;
  console.log('Куб числа', num, 'равен', cube);
}
cubeNumber(5);

// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
function checkNumber(num) {
  if (num > 0) {
    console.log('+++');
  } else (num < 0) {
    console.log('---');
  }
}

// 202 Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
function sumOfThreeNumbers(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  console.log('Сумма трех чисел:', sum);
}

/*  203 Сделайте функцию func, которая параметром будет принимать 3 числа и выводить в консоль их сумму. Пусть даны 3 переменные с числами:
let param1 = 1;
let param2 = 2;
let param3 = 3;
С помощью созданной вами функции выведите в консоль сумму значений эти переменных. */
function func(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  console.log('Сумма чисел:', sum);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3);

// 205 Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res.
function cubeNumber(num) {
  return num ** 3;
}
let res = cubeNumber(3);
console.log("Куб числа 3:", res);

// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
function squareRoot(num) {
  return Math.sqrt(num);
}
let rootOf3 = squareRoot(3);
let rootOf4 = squareRoot(4);
let sum = rootOf3 + rootOf4;
console.log("Корень числа 3:", rootOf3);
console.log("Корень числа 4:", rootOf4);
console.log("Сумма корней чисел 3 и 4:", sum);

// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
function divideByTwoUntilTen(num) {
  let iterations = 0;
  while (num >= 10) {
    num /= 2;
    iterations++;
  }
  return iterations;
}

// 211 Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
function areAllEvenNumbers(arr) {
  for (let num of arr) {
    if (num % 2 !== 0) {
      return false;
    }
  }
  return true;
}

// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
function areAllDigitsOdd(number) {
  let digits = String(number).split('');
  for (let digit of digits) {
    if (parseInt(digit) % 2 === 0) {
      return false;
    }
  }
    return true;
}

// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
function hasConsecutiveDuplicates(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]){
      return true;
    }
  }
  return false;
}

/* 212 Дана следующая функция:
function func(a, b) {
  if (a == b) {
    return true;
  } else {
    return false;
  }
}
Перепишите ее код в сокращенной форме согласно изученной теории. */
function func(a, b) {
  return a == b;
}

/* Дана следующая функция:
function func(a, b) {
	if (a != b) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории. */
function func(a, b) {
  return a != b;
}

/* Дана следующая функция:
function func(a, b) {
	if (a + b >= 10) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории. */
function func(a, b) {
  return a + b >= 10;
}

/* Дана следующая функция:
function func(num) {
	if (num >= 0) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории. */
function func(num) {
  return num >= 0;
}

// 214 Код должен найти сумму результатов работы двух функций:
function func1() {
  return 3;
}
function func2() {
  return 5;
}
console.log(func1() + func2());

// Код должен найти сумму элементов массива:
function sum(arr) {
  let res = 0;
  for (let elem of arr) {
    res += elem;
  }
  return res;
}
console.log(sum([1, 2, 3, 4, 5]));

// Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:
let arr = [1, 2, 3, 4, 5];
function func(arr) {
  let res = 0;
  for (let elem of arr) {
    res += elem;
  }
  console.log(res);
}
func(arr);

// Код должен найти сумму результатов работы двух функций:
function func1() {
  return 3;
}
function func2() {
  return 5;
}
console.log(func1() + func2());

// Код должен найти сумму элементов массива:
let sum = getSum([1, 2, 3, 4, 5]);
console.log(sum);
function getSum(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}

// Код должен найти сумму элементов массива:
let res = sum([1, 2, 3, 4, 5]);
console.log(res);
function sum(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}

// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:
function add(num) {
  if (num <= 9) {
    return '0' + num;
  }
  return num;
}

// Код должен найти сумму элементов массива:
let arr = [1, 2, 3, 4, 5];
let res = sum(arr);
console.log(res);
function sum(arr) {
  let res = 0;
  for (let elem of arr) {
    res += elem;
  }
  return res;
}

// Код должен найти сумму цифр числа:
let num = 12345;
let res = getDigitsSum(num);
console.log(res);
function getDigitsSum(num) {
  let arr = String(num).split('');
  let sum = 0;
  for (let elem of arr) {
    sum += +elem;
  }
  return sum;
}

// Код должен проверить число на то, что оно является простым:
console.log(isPrime(15));
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
