/* 274 Дан массив:
let arr = [1, 2, 3, 4, 5];
С помощью рекурсии выведите элементы этого массива в консоль. */
let arr = [1, 2, 3, 4, 5];
function func(arr){
  let sum = arr.shift();
  if (arr.length !== 0){
    sum += func(arr);
  }
  return sum;
}
func(arr);

// 275 Дан массив: let arr = [1, 2, 3, 4, 5]; С помощью рекурсии найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5];
function func(arr) {
  let sum = arr.shift() ** 2;
  if (arr.length !== 0) {
    sum += func(arr);
  }
  return sum;
}
console.log(func(arr));

/* 276 Дан многомерный объект произвольного уровня вложенности, например, такой:
{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
С помощью рекурсии выведите все примитивные элементы этого объекта в консоль. */
let obj = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } };
function getPrimitive(obj){
  for (let key in obj){
    if (typeof obj[key] === 'object'){
      getPrimitive(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}
getPrimitive(obj);

/* Дан многомерный массив произвольного уровня вложенности, например, такой:
[1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
[1, 2, 7, 8, 3, 4, 5, 6, 7] */
let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
function doOnedimensionalArr(arr) {
  let newArr = [];
  for (let elem of arr) {
    if (typeof elem === 'object') {
      newArr = newArr.concat(doOnedimensionalArr(elem))
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
}
console.log(doOnedimensionalArr(arr));

/* 277 Дан многомерный объект произвольного уровня вложенности, например, такой:
{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
С помощью рекурсии найдите сумму элементов этого объекта. */
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
function objSum(obj){
  let sum = 0;
  for (let key in obj){
    if (typeof obj[key] === 'object'){
      sum += objSum(obj[key]);
    } else {
      sum += obj[key];
    }
  }
  return sum;
}
console.log(objSum(obj));
/* Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
С помощью рекурсии слейте элементы этого массива в одну строку:
'abcdefgjk' */
let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
function strSum(arr) {
  let sum = '';
  for (let elem of arr) {
    if (typeof elem === 'object') {
      sum += strSum(elem);
    } else {
      sum += elem;
    }
  }
  return sum;
}
console.log(strSum(arr));

/* 278 Дан многомерный массив произвольного уровня вложенности, например, такой:
[1, [2, 7, 8], [3, 4], [5, [6, 7]]]
Возведите все элементы-числа этого массива в квадрат. */
let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
function func(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') {
      arr[i] = func(arr[i]);
    } else {
      arr[i] = arr[i] * arr[i];
    }
  }
  return arr;
}
