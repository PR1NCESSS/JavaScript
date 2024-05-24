/* 438 Дана функция:
function func() {
  console.log(this.value);
}
Даны три инпута:
<input id="elem1" value="text1">
<input id="elem2" value="text2">
<input id="elem3" value="text3">
С помощью метода call и функции func выведите на экран value каждого из инпутов. */
let input1 = document.querySelector('#elem1')
let input2 = document.querySelector('#elem2')
let input3 = document.querySelector('#elem3')
function func() {
  console.log(this.value);
}
func.call(input1);
func.call(input2);
func.call(input3);

/* 439 Пусть дан следующий код:
<input id="elem" value="hello">
let elem = document.querySelector('#elem');
function func(surname, name) {
  console.log(this.value + ', ' + name + ' ' + surname);
}
func(); // тут должно вывести 'hello, John Smit'
Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями. */
func.call(elem, 'John', 'Smit');

// 440 Вариант предыдущей задачи через apply();
func.apply(elem, ['John', 'Smit']);

/* 441 Пусть дан следующий код:
<input id="elem" value="привет">
let elem = document.getElementById('elem');
function func(name, surname) {
  console.log(this.value + ', ' + name + ' ' + surname);
}
// тут напишите конструкцию с bind()
func('John', 'Smit'); // тут должно вывести 'hello, John Smit'
func('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'
Напишите в указанном месте конструкцию с методом bind так, чтобы this внутри функции func всегда указывал на инпут из переменной elem. */
func = func.bind(elem);
