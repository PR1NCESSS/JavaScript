// №144 Выведите в консоль все элементы следующего массива: let arr = ['a', 'b', 'c', 'd', 'e'];
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
  console.log(elem);
}

// №145 Выведите в консоль все ключи следующего объекта: let obj = { x: 1, y: 2, z: 3 };
let obj = { x: 1, y: 2, z: 3 };
for (let key in obj){
  console.log(key);
}

// Выведите в консоль все элементы следующего объекта: let obj = { x: 1, y: 2, z: 3 };
let obj = { x: 1, y: 2, z: 3 };
for (let key in obj){
  console.log(obj[key]);
}

// №146 Выведите в консоль числа от 1 до 100.
let i = 1;
while (i <= 100){
  console.log(i);
  i++;
}

// Выведите в консоль числа от 11 до 33.
let i = 11;
while (i <= 33) {
  console.log(i);
  i++;
}

// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
let num = 1;
let i = 0;
while (num <= 1000){
  num *= 3;
  i++;
}
console.log(`Число ${num}, итераций - ${i}`);

// №147 С помощью цикла for выведите в консоль числа от 1 до 100.
for (let i = 1; i <= 100; i++){
  console.log(i);
}

// С помощью цикла for выведите в консоль числа от 11 до 33.
for (let i = 11; i <= 33; i++) {
  console.log(i);
}

// С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// С помощью цикла for выведите в консоль числа от 100 до 0.
for (let i = 100; i >= 0; i--) {
  console.log(i);
}

// 148 Выведите в консоль все элементы следующего массива: let arr = ['a', 'b', 'c', 'd', 'e'];
let arr = ['a', 'b', 'c', 'd', 'e'];
for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

// Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего: let arr = ['a', 'b', 'c', 'd', 'e'];
let arr = ['a', 'b', 'c', 'd', 'e'];
for(let i = 1; i < arr.length-1; i++){
  console.log(arr[i]);
}

// Выведите в консоль элементы следующего массива в обратном порядке: let arr = ['a', 'b', 'c', 'd', 'e'];
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// 149 Дан следующий массив:let arr = [2, 5, 9, 15, 1, 4]; Выведите в консоль те элементы массива, которые больше 3 - х, но меньше 10. 
let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
  if (elem > 3 && elem < 10) {
    console.log(elem);
  }
}

// Дан следующий объект: let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }; Выведите в консоль те элементы объекта, значения которых - нечетные числа.
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (let key in obj) {
  if (obj[key] % 2 !== 0) {
    console.log(key);
  }
}

// 150 Найдите сумму четных чисел от 2 до 100.
let res = 0;
for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    res += i;
  }
}
console.log(res);

// Найдите сумму нечетных чисел от 1 до 99.
let res = 0;
for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    res += i;
  }
}
console.log(res);

// Найдите произведение целых чисел от 1 до 20.
let res = 1;
for (let i = 1; i <= 20; i++) {
  res *= i;
}
console.log(res);

// 151 Дан массив: let arr = [2, 5, 9, 3, 1, 4]; Найдите сумму элементов этого массива.
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
  res += elem;
}
console.log(res);

// Дан массив: let arr = [2, 5, 9, 3, 1, 4]; Найдите сумму элементов элементов, являющихся четными числами.
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
  if (elem % 2 === 0) {
    res += elem;
  }
}

// Дан массив: let arr = [2, 5, 9, 3, 1, 4]; Найдите сумму квадратов элементов этого массива.
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
  res += elem ** 2
}
console.log(res);

// Дан массив: let arr = [2, 5, 9, 3, 1, 4] Найдите произведение элементов этого массива.
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
  res *= elem;
}
console.log(res);

// 152 С помощью цикла сформируйте строку, заполненную 5-тью дефисами.
let dashes = '';
for (let i = 0; i < 5; i++) {
  dashes += '-';
}
console.log(dashes);

// С помощью цикла сформируйте строку '123456789'.
let result = '';
for (let i = 1; i <= 9; i++) {
  result += i;
}
console.log(result);

// С помощью цикла сформируйте строку '987654321'.
let result = '';
for (let i = 9; i >= 1; i--) {
  result += i;
}
console.log(result);

// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let result = '-';
for (let i = 1; i <= 9; i++) {
  result += i + '-';
}
console.log(result);

// 153 Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.
for (let i = 10; i <= 1000; i++) {
  let firstDigit = Number(String(i)[0]);
  console.log(firstDigit);
}

// Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.
for (let i = 10; i <= 1000; i++) {
  let firstDigit = Number(String(i)[0]);
  let secondDigit = Number(String(i)[1]);
  let sum = firstDigit + secondDigit;
  console.log(sum);
}


// Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1.
for (let i = 10; i <= 1000; i++) {
  let firstDigit = Number(String(i)[0]);
  if (firstDigit === 1) {
    console.log(i);
  }
}

// Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
for (let i = 10; i <= 1000; i++) {
  let firstTwoDigitsSum = Number(String(i)[0]) + Number(String(i)[1]);
  if (firstTwoDigitsSum === 5) {
    console.log(i);
  }
}

// 154 Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
const numbers = [2, 5, 7, 0, 4, 9];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    break;
  }
  console.log(numbers[i]);
}

// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
const numbers = [2, 5, -3, 8, -4, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    break;
  }
  sum += numbers[i];
}
console.log(sum);

// Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
const numbers = [1, 2, 3, 4, 5, 3, 6];
let position = -1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    position = i;
    break;
  }
}
console.log(position);

// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
let sum = 0;
let count = 0;
while (sum <= 100) {
  count++;
  sum += count;
}
console.log("Количество чисел:", count);

// 156 С помощью двух вложенных циклов выведите на экран следующую строку: 111222333444555666777888999
let result = '';
for (let i = 1; i <= 9; i++) {
  for (let j = 0; j < 3; j++) {
    result += i;
  }
}
console.log(result);

// С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33
let result = ''
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    result += i + '' + j + ' ';
  }
}
console.log(result);

// 159 Используя цикл и метод push заполните массив числами от 1 до 10.
let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr); 

// Используя цикл и метод push заполните массив 10-ю буквами 'x'.
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push('x');
}
console.log(arr); 

// Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
let positiveArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positiveArr.push(arr[i]);
  }
}
console.log(positiveArr); 

// 160 Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * arr[i];
}
console.log(arr);

// Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
let arr = [5, 4, 3, 2, 1];
for (let i = 0; i < arr.length; i++) {
  arr[i] = --arr[i];
}
console.log(arr); 

// Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
let arr = [5, 15, 25, 35, 45];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 10;
}
console.log(arr);

// 161 Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами: let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; let arr2 = [1, 2, 3, 4, 5, 6, 7]; С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let numberOfDay = [1, 2, 3, 4, 5, 6, 7];
let daysOfWeek = {};
for (let i = 0; i < arr1.length; i++) {
  daysOfWeek[days[i]] = numberOfDay[i];
}
console.log(daysOfWeek);

// Дан объект:let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }; Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj = {};
for (let key in obj) {
  if (obj[key] % 2 === 0) {
    newObj[key] = obj[key];
  }
}
console.log(newObj);

// Дан объект: let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }; Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта.
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj = {};
for (let key in obj) {
  newObj[obj[key]] = key;
}
console.log(newObj);

// 162 Дан объект: let obj = { x: 1, y: 2, z: 3 }; Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
let obj = { x: 1, y: 2, z: 3 };
for (let key in obj) {
  obj[key] = obj[key] ** 2;
}
console.log(obj);

// Дан объект: let obj = { x: 1, y: 2, z: 3 }; Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.
let obj = { x: 1, y: 2, z: 3 };
for (let key in obj) {
  obj[key] += 1;
}
console.log(obj);

// 163 Дан массив: let arr = ['a', 'b', 'c', 'd', 'e']; Проверьте, что в этом массиве есть элемент 'c'.Если есть - выведите '+++', а если нет - выведите '---'.
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'c') {
    flag = true;
    break;
  }
}
if (flag) {
  console.log('+++');
} else {
  console.log('---');
}

// Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу и на само себя, и не делится на другие числа.
let num = 17;
let flag = true;
if (num <= 1) {
  flag = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
}
if (flag) {
  console.log(num + ' - простое число');
} else {
  console.log(num + ' - не простое число');
}

// 164 Дан массив: let arr = [10, 20, 30, 40, 21, 32, 51]; Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
for (let number of arr) {
  let firstDigit = String(number)[0];
  if (firstDigit === '1' || firstDigit === '2') {
    sum += number;
  }
}
console.log('Сумма элементов с первой цифрой 1 или 2:', sum);

// 165
let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
let sum = 0;
for (let key in obj) {
  if (+String(obj[key])[0] === 1 || +String(obj[key])[0] === 2) {
    sum += obj[key];
  }
}
console.log(sum);

// 166 Код должен вывести числа от 0 до 10:
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Код должен вывести числа от 10 до 0:
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Код должен вывести числа от 10 до 0:
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Код должен вывести числа от 0 до 10:
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Код должен найти сумму целых чисел от 1 до 10:
let res = 0;
for (let i = 1; i <= 10; i++) {
  res += i;
}
console.log(res);

// Код должен найти произведение целых чисел от 1 до 10:
let res = 1;
for (let i = 1; i <= 10; i++) {
  res *= i;
}
console.log(res);

// Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
  sum += +elem;
}
console.log(sum);

// Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
  sum += +elem;
}
console.log(sum); 

// Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
  sum += +elem;
}
console.log(sum);

// Код должен найти сумму элементов массива, однако, всегда выводит NaN:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}
console.log(sum);

// Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}
console.log(sum); 

// Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}
console.log(sum); 

// Код должен возвести в квадрат каждый элемент массива:
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] ** 2;
}
console.log(arr);

// Код должен заполнить массив числами от 1 до 5:
let arr = [];
for (let i = 1; i <= 5; i++) {
  arr.push(i);
}
console.log(arr);

// Код должен найти сумму элементов объекта:
let obj = { a: 1, b: 2, c: 3 };
let sum = 0;
for (let key in obj) {
  sum += obj[key];
}
console.log(sum);

// Код должен найти сумму элементов объекта:
let obj = { a: 1, b: 2, c: 3 };
let sum = 0;
for (let key in obj) {
  sum += obj[key];
}
console.log(sum);

// Код должен проверить, есть ли в массиве число 3 или нет:
let arr = [1, 2, 3, 4, 5];
let res = '';
let flag = false; 
for (let elem of arr) {
  if (elem === 3) {
    flag = true;
    break;
  }
}
if (flag) {
  res = '+++';
} else {
  res = '---';
}
console.log(res);

// Код должен заполнить массив числами от 1 до 5:
let arr = [];
for (let i = 1; i <= 5; i++) {
  arr.push(i);
}
console.log(arr);

// Код должен проверить, есть ли в массиве число 3 или нет:
let arr = [1, 2, 3, 4, 5];
let res = false;
for (let elem of arr) {
  if (elem === 3) {
    res = true;
    break;
  }
}
console.log(res);

// Код должен вывести только четные элементы из массива:
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
  if (elem % 2 === 0) {
    console.log(elem);
  }
}

// Код должен записать в новый массив только нечетные элементы старого массива:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res =[];
for (let elem of arr) {
  if (elem % 2 !== 0) {
    res.push(elem);
  }
}
console.log(res);

// 167 Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);

// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
let numbers = [0, 1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === i) {
    console.log(numbers[i]);
  }
}

//  Для вывода каждого элемента массива с новой строки с помощью функции document.write и тега < br >, можно использовать следующий код на JavaScript:
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  document.write(numbers[i] + "<br>");
}

// let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  document.write("<p>" + numbers[i] + "</p>");
}

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = 3; 
for (let i = 0; i < daysOfWeek.length; i++) {
  if (i === day - 1) {
    document.write('<em>' + daysOfWeek[i] + '</em><br>');
  } else {
    document.write(daysOfWeek[i] + '<br>');
  }
}

/* Дан следующий объект с работниками и их зарплатами:
let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};
Увеличьте зарплату каждого работника на 10 %. */
let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};
for (let key in obj) {
  obj[key] *= 1.1;
}
console.log(obj);

// Дан следующий объект: let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 }; Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
let sumKeys = 0;
let sumValues = 0;
for (let key in obj) {
  sumKeys += Number(key);
  sumValues += obj[key];
}
let result = sumKeys / sumValues;
console.log(result);

// Дан следующий объект: let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }; Запишите ключи этого объекта в один массив, а значения - в другой.
let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
let keysArray = [];
let valuesArray = [];
for (let key in obj) {
  keysArray.push(key);
  valuesArray.push(obj[key]);
}
console.log(keysArray);
console.log(valuesArray);

/* Дан следующий объект:
let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2 */
let obj = {
  1: 125,
  2: 225,
  3: 128,
  4: 356,
  5: 145,
  6: 281,
  7: 452,
};
let newArray = [];
for (let key in obj) {
  if (obj[key].toString()[0] === '1' || obj[key].toString()[0] === '2') {
    newArray.push(obj[key]);
  }
}
console.log(newArray);

// Дан следующий массив: let arr = ['a', 'b', 'c', 'd', 'e']; Создайте из этого массива следующий объект: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' };
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[i + 1] = arr[i];
}
console.log(obj);

// Дан следующий массив: let arr = ['a', 'b', 'c', 'd', 'e']; Создайте из этого массива следующий объект: { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = i + 1;
}
console.log(obj);








