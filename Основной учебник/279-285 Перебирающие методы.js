// 279 Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
let arr = [4, 9, 16];
let newArr = arr.map((elem) => {
  return Math.sqrt(elem);
})
console.log(newArr);

// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
let stringsArray = ['one', 'two', 'three'];
let newArray = stringsArray.map(string => {
  return string + '!';
});
console.log(newArray);

// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
let stringsArray = ['one', 'two', 'three'];
let reversedArray = stringsArray.map(string => {
  return string.split('').reverse().join('');
});
console.log(reversedArray);

/* Дан следующий массив:
let arr = ['123', '456', '789'];
Используя метод map преобразуйте этот массив в следующий:
let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]; */
let arr = ['123', '456', '789'];
arr = arr.map(elem => {
  return elem.split('');
})
console.log(arr);

// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
let numbers = [1, 2, 3, 4, 5];
let modifiedNumbers = numbers.map((number, index) => number * index);
console.log(modifiedNumbers);

// 280 Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(number => sum += number ** 2);
console.log(sum);

// 281 Дан массив с числами. Оставьте в нем только положительные числа.
let numbers = [-1, 2, -3, 4, 5];
let positive = numbers.filter(elem => elem > 0);
console.log(positive);

// Дан массив с числами.Оставьте в нем только отрицательные числа.
let numbers = [-1, 2, -3, 4, 5];
let negative = numbers.filter(elem => elem < 0);
console.log(negative);

// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
let numbers = [-1, 2, 40, -3, 4, 5, 15,];
let newNumbers = numbers.filter(elem => elem > 0 && elem < 10);
console.log(newNumbers);

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let strings = ['apple', 'banana', 'orange', 'kiwi', 'pineapple'];
let longStrings = strings.filter((string) => {
  return string.length > 5;
});
console.log(longStrings);

// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
let numbers = [1, 2, 3, 4, 5, 6];
let filteredNumbers = numbers.filter((number, index) => {
  return number * index < 30;
});
console.log(filteredNumbers);

// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
let array = [1, 2, [3, 4], 5, [6, 7]];
let filteredArray = array.filter((element) => {
  return typeof element !== 'object';
});
console.log(filteredArray);

// 282 Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(number => number > 0);
console.log(allPositive);

// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
let arr = [1, 2, 3, 4, 5];
let check = arr.every((elem, index) => elem * index < 30);
console.log(check);

// 283 Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
let numbers = [-1, -2, 3, -4, -5];
let hasPositiveNumber = numbers.some(number => number > 0);
console.log(hasPositiveNumber);

// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
let numbers = [-1, -2, 3, -4, -5];
let hasPositiveNumber = numbers.some((number, index) => number * index > 30);
console.log(hasPositiveNumber);

