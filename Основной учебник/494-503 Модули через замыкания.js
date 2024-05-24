// 497 Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.
;(function (selector1, selector2, selector3, selector4) {
  let btn = document.querySelector(selector1);
  let input1 = document.querySelector(selector2);
  let input2 = document.querySelector(selector3);
  let input3 = document.querySelector(selector4);
  function func(num) {
    return num * num;
  }
  btn.addEventListener('click', function () {
    console.log(input1.value + input2.value + input3.value);
  });
})('#btn', '#input1', '#input2', '#input3');

/* 501 Дан следующий модуль:
;(function() {
  let str1 = 'переменная модуля';
  let str2 = 'переменная модуля';
  let str3 = 'переменная модуля';
  function func1() {
    alert('функция модуля');
  }
  function func2() {
    alert('функция модуля');
  }
  function func3() {
    alert('функция модуля');
  }
})();
Экспортируйте наружу одну из переменных и две любые функции. */
;(function () {
  let str1 = 'переменная модуля';
  let str2 = 'переменная модуля';
  let str3 = 'переменная модуля';
  function func1() {
    alert('функция модуля');
  }
  function func2() {
    alert('функция модуля');
  }
  function func3() {
    alert('функция модуля');
  }
  window.str1 = str1;
  window.func1 = func1;
  window.func2 = func2;
})();

/* 502 Дан следующий модуль:
;(function() {
  let str1 = 'переменная модуля';
  let str2 = 'переменная модуля';
  let str3 = 'переменная модуля';
  function func1() {
    alert('функция модуля');
  }
  function func2() {
    alert('функция модуля');
  }
  function func3() {
    alert('функция модуля');
  }
  function func4() {
    alert('функция модуля');
  }
  function func5() {
    alert('функция модуля');
  }
})();
Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными. */
; (function () {
  let str1 = 'переменная модуля';
  let str2 = 'переменная модуля';
  let str3 = 'переменная модуля';
  function func1() {
    alert('функция модуля');
  }
  function func2() {
    alert('функция модуля');
  }
  function func3() {
    alert('функция модуля');
  }
  function func4() {
    alert('функция модуля');
  }
  function func5() {
    alert('функция модуля');
  }
  window.module = {str1, str2, func1, func2, func3, func4, func5};
})();

/* 503 Дан следующий код:
function avg1(arr) {
  return sum(arr, 1) / arr.length;
}
function avg2(arr) {
  return sum(arr, 2) / arr.length;
}
function avg3(arr) {
  return sum(arr, 3) / arr.length;
}
// вспомогательная функция
function sum(arr, pow) {
  let res = 0;
	
  for (let elem of arr) {
    res += elem ** pow;
  }
  return res;
}
Оформите этот код в виде модуля. Эспортируйте наружу все функции, кроме вспомогательной. */
;(function() {
  function avg1(arr) {
    return sum(arr, 1) / arr.length;
  }
  function avg2(arr) {
    return sum(arr, 2) / arr.length;
  }
  function avg3(arr) {
    return sum(arr, 3) / arr.length;
  }
  function sum(arr, pow) {
    let res = 0;
    for (let elem of arr) {
      res += elem ** pow;
    }
    return res;
  }
  window.math = {avg1, avg2, avg3};
})();

