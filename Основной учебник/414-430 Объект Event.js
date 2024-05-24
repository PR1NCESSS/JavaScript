// 415 Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора
let elem = document.getElementById('elem');
document.addEventListener('mousemove', function (event) {
  elem.innerHTML = event.clientX + ' : ' + event.clientY;
});

/* 416 В следующем коде к двум событиям привязан один и тот же обработчик:

<button id="elem">text</button>
let elem = document.querySelector('#elem');
elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);
function func() {

}
Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный. */
let elem = document.querySelector('#elem');
elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);
function func(event) {
  if(event.type === 'click'){
    this.style.backgroundColor = 'green';
  } else if (event.type === 'dblclick'){
    this.style.backgroundColor = 'red';
  }
}

// 417 Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - выведите информацию об этом в консоль.
let elem = document.querySelector('#elem');
elem.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.textContent += '!';
  } else if (event.target.tagName === 'UL') {
    alert('Вы кликнули по <ul>')
  }
});

// 418 Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.
let elem = document.querySelector('input');
elem.addEventListener('keypress', function (event) {
  console.log(event.key, event.code);
});

// Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
const input = document.getElementById('input');
const paragraph = document.getElementById('output');
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    paragraph.textContent = input.value;
    input.value = ''; 
  }
});

// 419 Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.
const element = document.getElementById('element');
element.addEventListener('click', function (event) {
  if (event.altKey) {
    element.style.color = 'red';
  }
});

// Пусть у вас есть список ul с тегами li. Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.
const ul = document.querySelector('ul');
const lis = ul.querySelectorAll('li');
lis.forEach(li => {
  li.addEventListener('click', function (event) {
    if (event.ctrlKey) {
      li.textContent += '1';
    } else if (event.shiftKey) {
      li.textContent += '2';
    }
  });
});

// 420 Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    link.textContent += ' ' + link.getAttribute('href'); // Добавляем href в конец текста ссылки
  });
});

// Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('result');
const calculate = document.getElementById('calculate');
calculate.addEventListener('click', function (event) {
  event.preventDefault();
  const num1 = +input1.value;
  const num2 = +input2.value;
  const sum = num1 + num2;
  result.textContent = 'Сумма: ' + sum;
});

// 422 Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
let div = document.querySelector('div');
div.addEventListener('click', function (event) {
  if (event.target.tagName === 'UL') {
    console.log('клик именно по <ul>');
  }
  if (event.target.tagName === 'LI') {
    console.log('клик именно по <li>');
  }
});

// Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, а при клике на ul в консоль выводилась информация об этом.
let div = document.querySelector('div');
div.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.textContent += '!';
  } else if (event.target.tagName === 'UL') {
    alert('Вы кликнули по <ul>')
  }
});

// 426 Самостоятельно реализуйте корректную работу описанной задачи.
let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block = document.querySelector('#block');
button.addEventListener('click', function (event) {
  block.classList.add('active');
  event.stopPropagation();
});
parent.addEventListener('click', function () {
  block.classList.remove('active');
});




