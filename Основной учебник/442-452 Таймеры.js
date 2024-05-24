// 442 Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.
setInterval(() => console.log('hello'), 3000);

// 443 Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
let counter = 100;
setInterval(() => console.log(--counter), 1000);

// 444 Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
let counter = 10;
let timerId = setInterval(() => {
  console.log(--counter);
  if(counter === 0){
    clearInterval(timerId);
  }
}, 1000);

// 445 Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
// <button id="start">start</button>
let start = document.querySelector('#start');
start.addEventListener('click', function () {
  let counter = 100;
  setInterval(() => console.log(counter--), 1000);
});

// 446 Возьмите ваше решение предыдущей задачи. Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. Исправьте эту проблему.
let start = document.querySelector('#start');
start.addEventListener('click', function func () {
  let counter = 100;
  setInterval(() => console.log(counter--), 1000);
  this.removeEventListener('click', func);
});

// 447 Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер. По нажатию на вторую кнопку остановите таймер.Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.
let count = 100;
let timer;
function startTimer() {
  timer = setInterval(function () {
    console.log(--count);
    if (count === 0) {
      clearInterval(timer);
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(timer);
}
document.querySelector('#startButton').addEventListener('click', startTimer);
document.querySelector('#stopButton').addEventListener('click', stopTimer);

// Код не учитывает то, что на кнопку старт можно сделать несколько нажатий. Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему.
let count = 100;
let timer;
function startTimer() {
  document.querySelector('#startButton').removeEventListener('click', startTimer);
  timer = setInterval(function () {
    console.log(--count);
    if (count === 0) {
      clearInterval(timer);
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(timer);
  document.querySelector('#startButton').addEventListener('click', startTimer);
}
document.querySelector('#startButton').addEventListener('click', startTimer);
document.querySelector('#stopButton').addEventListener('click', stopTimer);

// 448 Пусть в инпуте в атрибуте value изначально записано число 10. Запустите таймер, который каждую секунду будет уменьшать это число на единицу.
// <input id="elem" value="10">
let elem = document.querySelector('#elem');
let timerId = setInterval(function () {
  elem.value = Number(elem.value) - 1;
  if (+elem.value === 0){
    clearInterval(timerId);
  }
}, 1000);

// 450 Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
document.querySelector('#startButton').addEventListener('click', function () {
  let counter = document.querySelector('#counter');
  let value = +counter.textContent;
  let timer = setInterval(function () {
    value++;
    counter.textContent = value; 
  }, 1000);
});

// Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.
/* <p id="counter">10</p>
<button id="startButton">Start Timer</button> */
document.querySelector('#startButton').addEventListener('click', function () {
  let counter = document.querySelector('#counter');
  let value = +counter.textContent;
  let timer = setInterval(function () {
    value--;
    counter.textContent = value;
    if (value === 0) {
      clearInterval(timer);
    }
  }, 1000);
});

// Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
let input = document.querySelector('#numberInput');
input.addEventListener('input', function () {
  let value = +input.value;
  setInterval(function () {
    input.value = value * value;
  }, 1000);
});

// Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.
const inputNumber = document.querySelector('#inputNumber');
const countdownParagraph = document.querySelector('#countdown');
let countdownInterval;
function startCountdown() {
  let number = +inputNumber.value;
  countdownParagraph.textContent = number;
  countdownInterval = setInterval(function () {
    number--;
    if (number >= 0) {
      countdownParagraph.textContent = number;
    } else {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

inputNumber.addEventListener('blur', function () {
  clearInterval(countdownInterval);
  startCountdown();
});

// Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.
const inputNumber = document.querySelector('#inputNumber');
const startButton = document.querySelector('#startButton');
const countdownParagraph = document.querySelector('#countdown');
let countdownInterval;
function startCountdown() {
  let number = parseInt(inputNumber.value);
  countdownParagraph.textContent = number;
  countdownInterval = setInterval(function () {
    number--;
    if (number >= 0) {
      countdownParagraph.textContent = number;
    } else {
      clearInterval(countdownInterval);
    }
  }, 1000);
}
startButton.addEventListener('click', function () {
  clearInterval(countdownInterval);
  startCountdown(); 
});

// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.
const timerParagraph = document.querySelector('#timer');
const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');
let timerInterval;
let timerValue = 0;
function startTimer() {
  timerInterval = setInterval(function () {
    timerValue++;
    timerParagraph.textContent = timerValue;
  }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
}
startButton.addEventListener('click', function () {
  startTimer();
});
stopButton.addEventListener('click', function () {
  stopTimer();
});

// Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
const changingParagraph = document.getElementById('changingParagraph');
function changeColor() {
  const currentColor = changingParagraph.style.color;
  if (currentColor === 'red') {
    changingParagraph.style.color = 'green';
  } else {
    changingParagraph.style.color = 'red';
  }
}
setInterval(changeColor, 1000);

// Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики
const clockParagraph = document.querySelector('#clock');
function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const timeString = `${hours}:${minutes}:${seconds}`;
  clockParagraph.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// 451 Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.
function showMessage() {
  const messageParagraph = document.querySelector('#messageParagraph');
  messageParagraph.textContent = 'Прошло 10 секунд!';
}
setTimeout(showMessage, 10000);

// 452 Выведите в консоль число 0. Через секунду выведите число 1, через две секунды выведите число 2, через 3 секунды выведите число 3. И так далее до бесконечности.
function printNumbers(num) {
  console.log(num);
  setTimeout(function () {
    printNumbers(num + 1);
  }, num * 1000);
}
printNumbers(0);


