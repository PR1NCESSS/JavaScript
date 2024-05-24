// 240 Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.
function test(func1, func2, func3) {
  let result = func1() + func2() + func3();
  console.log(result);
}
test(
  function () { return 1; },
  function () { return 2; },
  function () { return 3; }
);

// 241 Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
function test(func1, func2, func3) {
  let result = func1() + func2() + func3();
  return result;
}

// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.
function func1() {
  return 1;
}

function func2() {
  return 2;
}

function func3() {
  return 3;
}
test(func1, func2, func3);

// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.
let func1 = function() {
  return 1;
}

let func2 = function () {
  return 2;
}

let func3 = function () {
  return 3;
}
test(func1, func2, func3);

// 242 Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.
function test(func) {
  console.log(func(3));
}
test(function(num){
  return num ** 3;
});

// Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.
function test(func) {
  console.log(func(3));
}
function func(num) {
  return num ** 3;
}
test(func);

// Переделайте передаваемую функцию на Function Expression с тем же именем func.
function test(func) {
  console.log(func(3));
}
let func  = function(num) {
  return num ** 3;
}
test(func);

// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.
function test(func) {
  alert(func(2, 3));
}
let func = function (num1, num2) {
  return num1 + num2;
}
test(func);

/* 243 Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа. Пусть функция test возвращает сумму результатов переданных функций:
function test(num, func1, func2) {
	return func1(num) + func2(num);
}
Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль. */
function test(num, func1, func2) {
  return func1(num) + func2(num);
}
test(
  3, 
  function(num){
    return num * num;
  }, 
  function(num){
    return num ** 3;
  }
)

// 244 Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.
function test(arr, func) {
  for (let i = 0; i < arr.length; i++){
    arr[i] = func(arr[i]);
  }
  return arr;
}

// Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.
test([1, 2, 3], function(num) {
  return num ** 3;
})

// 245 Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.
function func(num1, num2) {
  function square(num){
    return num * num;
  }
  function cube(num){
    return num ** 3;
  }
  return square(num1) + cube(num2);
}

// 250 Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.
function func1() {
  return function () {
    return 1;
  };
}
function func2() {
  return function () {
    return 2;
  };
}
let sum = func1()() + func2()();
console.log(sum);

// 251 Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
function func() {
  return function(){
    return function(){
      return function(){
        return function(){
          return '!';
        }
      }
    }
  }
}

// 252 Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
function func(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
function func(num1){
  let numbers = [];
  numbers.push(num1);
  return function(num2) {
    numbers.push(num2);
    return function (num3) {
      numbers.push(num3);
      return function (num4) {
        numbers.push(num4);
        return function(){
          return numbers;
        }
      }
    }
  }
}
console.log(func(2)(3)(4)(5)());

// 253 Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
function each(arr, callback) {
  let result = [];
  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}
console.log(each([1, 2, 3], function (num) {
  return num * 2;
}))

// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
console.log(each(['hell', 'paradise', 'town'], function(str){
  return str.split('').reverse().join('');
}))

// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
console.log(each(['hell', 'paradise', 'town'], function (str) {
  return str[0].toUpperCase() + str.slice(1);
}))

/* 254 С помощью следующей функции возведите все элементы массива в куб:
function cube(num) {
  return num ** 3;
} */ 
console.log(each([1,2,3], cube));

/* 256 Дана следующая функция с коллбэком:
let result = filter([1, 2, 3, 4, 5], function(elem) {
  if (elem > 0) {
    return true;
  } else {
    return false;
  }
});
Упростите коллбэк через стрелочную функцию. */
let result = filter([1, 2, 3, 4, 5], elem => elem > 0);


