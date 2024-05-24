// 261 Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.
function test() {
  let num = 1;

  return function () {
    console.log(num);
    num++;
  }
}
let func = test();
func(); 
func(); 
func(); 
func(); 
func(); 

// Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.
function test() {
  let num = 10;
  return function () {
    num--;
    console.log(num);
  }
} 
let func = test();
func();
func();
func();
func();
func();

// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.
function test() {
  let num = 10;
  return function () {
    if (num > 0) {
      num--;
      console.log(num);
    } else {
      console.log('Отсчёт окончен');
    }
  }
}
let func = test();
