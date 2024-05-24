// №1 Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(arrSum([1, 2, 34, 5]))


// №2 Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
function findDividers(num){
  let dividers = [];
  for (let i = 1; i <= num; i++){
    if (num % i == 0){
      dividers.push(i)
    }
  }
  return dividers;
} 
console.log(findDividers(6));

// №3 Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
function doArrayFromStr(str) {
  return str.split('');
}

console.log(doArrayFromStr('pencil'))

// №4 Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
function reverseStr(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
console.log(reverseStr('1234'))

// №5 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
function upperFirstSymbol(str) {
  let newStr = str.replace(str[0], str[0].toUpperCase())
  return newStr;
}
console.log(upperFirstSymbol('pencil'));

// №6 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
function capitalizeFirstLetter(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstLetter("hello world")); 

// №7 Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
function fillArray(number) {
  let arr = [];
  for (let i = 1; i < number; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(fillNumbersTo(9));

// №8 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
function sumDigits(number) {
  let str = String(number);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum;
}
console.log(sumDigits(123));

// №9 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return `${year} год - високосный`;
  }
  else {
    return `${year} год - невисокосный`;
  }
}
console.log(isLeapYear(2024))

// №10  Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function secondsToDays(seconds) {
  return `в ${seconds} секундах ${(seconds / 86400).toFixed(3)} дней`; // количество секунд в одном дне (24 часа * 60 минут * 60 секунд)
}
console.log(secondsToDays(90000));

// №11 Сделайте функцию, которая будет возвращать случайный элемент из массива.
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
console.log(getRandomElement([1, 2, 3, 4, 5]));

// №12 Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; 
    }
  }
  return true; 
}
console.log(isPrime(17)); 
console.log(isPrime(25)); 
