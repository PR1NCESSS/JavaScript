/* 286 Дан массив:
let arr = [1, 2, 3, 4, 5];
Дана также функция:
function func(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}
Найдите с помощью приведенной функции сумму элементов массива. */ 
let arr = [1, 2, 3, 4 ,5];
function func(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));

// 288 Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.
let arr = [1, 2, 3, 4, 5];
console.log(Math.min(...arr));

// 293 Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.
function func(...nums){
  let res = 0;
  for(let num of nums){
    res += num;
  }
  return res / nums.length;
}

/* 296 В следующем коде части массива записываются в соответствующие переменные:
let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
Переделайте этот код через деструктуризацию согласно изученной теории. */
let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, position, salary] = arr;

/* 297 В следующем коде части массива записываются в соответствующие переменные:
function func() {
  return ['John', 'Smit', 'development', 'programmer', 2000];
}
let arr = func();
let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
Переделайте этот код через деструктуризацию согласно изученной теории. */
function func() {
  return ['John', 'Smit', 'development', 'programmer', 2000];
}
let [name, surname, department, position, salary] = func();

/* 298 В следующем коде части массива записываются в соответствующие переменные:
let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let department = arr[2];
let position   = arr[3];
Переделайте этот код через деструктуризацию согласно изученной теории. */
let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [,, department, position,] = arr;

/* 300 В следующем коде части массива записываются в соответствующие переменные:
let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let name    = arr[0];
let surname = arr[1];
let info = arr.slice(2); // все элементы со второго до конца массива
Переделайте этот код через деструктуризацию согласно изученной теории. */ 
let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, ...info] = arr;

/* 301 В следующем коде части массива записываются в соответствующие переменные:
let arr = ['John', 'Smit', 'development', 'programmer'];
let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'trainee';
}
Переделайте этот код через деструктуризацию согласно изученной теории. */ 
let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department, position = 'trainee'] = arr;

/* 302 
function func() {
  return (new Date).getDate();
}
let [year, month, day = func()] = arr;
Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год. */
let arr = [];
function func1() {
  return (new Date).getDate();
}
function func2() {
  return (new Date).getMonth();
}
function func3() {
  return (new Date).getFullYear();
}
let [year = func3(), month = func2(), day = func1()] = arr;
console.log(year)

/* 304 В следующем коде части объекта записываются в соответствующие переменные:
let options = {
  color: 'red',
  width:  400,
  height: 500,
};
let color  = options.color;
let width  = options.width;
let height = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории. */
let options = {
  color: 'red',
  width: 400,
  height: 500,
};
let {color, height, width} = options;

/* 305 В следующем коде части объекта записываются в соответствующие переменные:
let options = {
  color: 'red',
  width:  400,
  height: 500,
};
let c = options.color;
let w = options.width;
let h = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории. */
let options = {
  color: 'red',
  width: 400,
  height: 500,
};
let {color: c, width: w, height: h} = options;

/* 306 В следующем коде части объекта записываются в соответствующие переменные:
let options = {
  width:  400,
  height: 500,
};
let color;
if (options.color !== undefined) {
  color = options.color;
} else {
  color = 'black';
}
let width  = options.width;
let height = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории. */ 
let options = {
  width: 400,
  height: 500,
};
let {color = 'black', width, height} = options;

/* 307 В следующем коде части объекта записываются в соответствующие переменные:
let options = {
  width:  400,
  height: 500,
};
let с;
if (options.с !== undefined) {
  с = options.color;
} else {
  с = 'black';
}
let w = options.width;
let h = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории. */ 
let options = {
  width: 400,
  height: 500,
};
let {color:c = 'black', width: w, height: h} = options;

/* 309 Переделайте следующий код через деструктуризацию согласно изученной теории:
function func(employee) {
  let name       = employee[0];
  let surname    = employee[1];
  let department = employee[2];
  let position   = employee[3];
  let salary     = employee[4];
}
func( ['John', 'Smit', 'development', 'programmer', 2000] ); */ 
function func([name, surname, department, position, salary]) {
  console.log(name);
  console.log(surname);
  console.log(position);
}
func(['John', 'Smit', 'development', 'programmer', 2000]);

/* Переделайте следующий код через деструктуризацию согласно изученной теории:
function func(employee) {
  let name     = employee[0];
  let surname  = employee[1];
  let info     = employee[2];
}
func( ['John', 'Smit', 'development', 'programmer', 2000] ); */ 
function func([name, surname, info]) {
  console.log(name);
  console.log(surname);
  console.log(info);
}
func(['John', 'Smit', 'development', 'programmer', 2000]);

/* Переделайте следующий код через деструктуризацию согласно изученной теории:
function func(employee) {
  let name       = employee[0];
  let surname    = employee[1];
  let department = employee[2];
  let position;
  if (arr[3] !== undefined) {
    position = arr[3];
  } else {
    position = 'джуниор';
  }
}
func( ['John', 'Smit', 'development'] ); */
function func([name, surname, department, position = 'джуниор']) {
  console.log(position)
}
func(['John', 'Smit', 'development']);

/* Переделайте следующий код через деструктуризацию согласно изученной теории:
function func(department, employee, hired) {
  let name     = employee[0];
  let surname  = employee[1];
	
  let year  = hired[0];
  let month = hired[1];
  let day   = hired[2];
}
func( 'development', ['John', 'Smit'], [2018, 12, 31] ); */ 
function func(department, [name, surname], [year, month, day]) {
  console.log(name);
  console.log(surname);
  console.log(department);
  console.log(year);
  console.log(month);
  console.log(day);
}
func('development', ['John', 'Smit'], [2018, 12, 31]);

/* 310 Переделайте следующий код через деструктуризацию согласно изученной теории:
function func(options) {
  let color  = options.color;
  let width  = options.width;
  let height = options.height;
}
func( {color: 'red', width: 400, height: 500} ); */
function func({color, width, height}) {
  console.log(color);
  console.log(width);
  console.log(height);
}
func({ color: 'red', width: 400, height: 500 });

/* Переделайте следующий код через деструктуризацию согласно изученной теории:
function func(options) {
  let width  = options.width;
  let height = options.height;
  let color;
  if (options.color !== undefined) {
    color = options.color;
  } else {
    color = 'black';
  }
}
func( {color: 'red', width: 400, height: 500} ); */
function func({width, height, color = 'black'}) {
  console.log(color);
  console.log(width);
  console.log(height);
}
func({ color: 'red', width: 400, height: 500 });
