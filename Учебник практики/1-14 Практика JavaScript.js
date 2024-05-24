// 1 Сделайте калькулятор, который будет находить площадь и периметр квадрата.
function calculate(a) {
  let square = a ** 2;
  let perimeter = 4 * a;
  return square, perimeter;
}

// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.
function calculateRect(a, b) {
  let square = a * b;
  let perimeter = 2 * (a + b);
  return square, perimeter;
}

// Сделайте калькулятор, который будет находить площадь круга и длину окружности.
function calculateCircle(r) {
  const PI = Math.PI;
  let square = PI * r ** 2;
  let c = 2 * PI * r;
  return square, c;
}

// Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
function calculateTriang(a, b, c) {
  let semiP = (a + b + c) / 2;
  let square = Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c))
  return square;
}

// 2 Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.
/* <h1>Корни квадратного уравнения</h1>
    <label for="coefA">Коэффициент a:</label>
    <input type="number" id="coefA">
  
    <label for="coefB">Коэффициент b:</label>
    <input type="number" id="coefB">
    
    <label for="coefC">Коэффициент c:</label>
    <input type="number" id="coefC">
    
    <button onclick="calculateRoots()">Рассчитать корни</button>

    <p>Корни уравнения: <span id="roots">-</span></p> */

function calculateRoots() {
  let coefA = parseFloat(document.getElementById('coefA').value);
  let coefB = parseFloat(document.getElementById('coefB').value);
  let coefC = parseFloat(document.getElementById('coefC').value);

  let discriminant = coefB * coefB - 4 * coefA * coefC;

  let roots = '';

  if (discriminant > 0) {
    let root1 = (-coefB + Math.sqrt(discriminant)) / (2 * coefA);
    let root2 = (-coefB - Math.sqrt(discriminant)) / (2 * coefA);
    roots = `x1 = ${root1.toFixed(2)}, x2 = ${root2.toFixed(2)}`;
  } else if (discriminant === 0) {
    let root = -coefB / (2 * coefA);
    roots = `x = ${root.toFixed(2)}`;
  } else {
    roots = 'Уравнение не имеет действительных корней';
  }

  document.getElementById('roots').textContent = roots;
}

// Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.
/* <h1>Проверка тройки Пифагора</h1>

    <label for="num1">Число 1:</label>
    <input type="number" id="num1">
    
    <label for="num2">Число 2:</label>
    <input type="number" id="num2">
    
    <label for="num3">Число 3:</label>
    <input type="number" id="num3">
    
    <button onclick="check()">Проверить</button>

    <p id="result">-</p> */
function check() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let num3 = parseFloat(document.getElementById('num3').value);

  let nums = [num1, num2, num3];
  nums.sort((a, b) => a - b);
  let maxNum = nums.pop();
  if (maxNum ** 2 === nums.reduce((acc, num) => acc + num ** 2, 0)) {
    document.getElementById('result').textContent = 'Это тройка Пифагора!';
  } else {
    document.getElementById('result').textContent = 'Это не тройка Пифагора.';
  }
}

// Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.
/* <h1>Список делителей числа</h1>

    <label for="numberInput">Введите число:</label>
    <input type="number" id="numberInput">
    
    <button onclick="showDivisors()">Показать делители</button>

    <ul id="divisorsList"></ul> */
function showDivisors() {
  let number = parseInt(document.getElementById('numberInput').value);
  let divisorsList = document.getElementById('divisorsList');
  divisorsList.innerHTML = '';
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      let listItem = document.createElement('li');
      listItem.textContent = i;
      divisorsList.appendChild(listItem);
    }
  }
}

// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.
/* <h1>Общие делители чисел</h1>

    <label for="numberInput1">Введите первое число:</label>
    <input type="number" id="numberInput1">
    
    <label for="numberInput2">Введите второе число:</label>
    <input type="number" id="numberInput2">
    
    <button onclick="showCommonDivisors()">Показать общие делители</button>

    <ul id="commonDivisorsList"></ul> */ 
function showCommonDivisors() {
  let number1 = parseInt(document.getElementById('numberInput1').value);
  let number2 = parseInt(document.getElementById('numberInput2').value);
  let commonDivisorsList = document.getElementById('commonDivisorsList');

  commonDivisorsList.innerHTML = '';

  let minNumber = Math.min(number1, number2);
  for (let i = 1; i <= minNumber; i++) {
    if (number1 % i === 0 && number2 % i === 0) {
      let listItem = document.createElement('li');
      listItem.textContent = i;
      commonDivisorsList.appendChild(listItem);
    }
  }
}

// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.
/* <h1>НОД чисел</h1>

    <label for="numberInput1">Введите первое число:</label>
    <input type="number" id="number1">
    
    <label for="numberInput2">Введите второе число:</label>
    <input type="number" id="number2">
    
    <button onclick="showNOD()">Показать НОД</button>

    <p id="res"></p> */

function showNOD() {
  let num1 = parseInt(document.getElementById('number1').value);
  let num2 = parseInt(document.getElementById('number2').value);

  function nod(a, b) {
    while (b != 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  let result = nod(num1, num2);
  document.getElementById('res').innerText = "Наибольший общий делитель: " + result;
}

// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.
/* <h1>НОК чисел</h1>

    <label for="numberInput1">Введите первое число:</label>
    <input type="number" id="number1">
    
    <label for="numberInput2">Введите второе число:</label>
    <input type="number" id="number2">
    
    <button onclick="showNOK()">Показать НОК</button>

    <p id="res"></p> */

function showNOK() {
  let num1 = parseInt(document.getElementById('number1').value);
  let num2 = parseInt(document.getElementById('number2').value);

  function nod(a, b) {
    while (b != 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  function nok(a, b) {
    return Math.abs(a * b) / nod(a, b);
  }

  let result = nok(num1, num2);
  document.getElementById('res').innerText = "Наименьшее общее кратное: " + result;
}

// 3 Реализуйте описанную игру.
/*   <h1>Игра "Угадай число"</h1>
    <p id="message">Игра началась! Введите число от 1 до 100.</p>
    <label for="guessInput">Введите число:</label>
    <input type="number" id="guessInput" min="1" max="100">
    <button onclick="checkGuess()">Угадать</button> */
let randomNumber;

randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let userGuess = parseInt(document.getElementById('guessInput').value);

  if (userGuess < randomNumber) {
    document.getElementById('message').innerText = "Введите число побольше.";
  } else if (userGuess > randomNumber) {
    document.getElementById('message').innerText = "Введите число поменьше.";
  } else if (userGuess === randomNumber) {
    document.getElementById('message').innerText = "Поздравляем! Вы угадали число.";
  } else {
    document.getElementById('message').innerText = "Пожалуйста, введите корректное число.";
  }
}

// 4 Реализуйте описанную игру. Модифицируйте предыдущую задачу, добавив таймер обратного отсчета. Если игрок не успеет угадать числа за отведенное время - он проиграл.
/*   <style>
    #game-board {
      display: grid;
      grid-template-columns: repeat(10, 30px);
      grid-template-rows: repeat(10, 30px);
      gap: 2px;
    }
    .cell {
      width: 30px;
      height: 30px;
      border: 1px solid #000;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color: white;
    }
    .found {
      background-color: green;
    }
    .missed {
      background-color: red;
    }
    #timer {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>Угадай ячейку</h1>
  <div id="game-board"></div>
  <div id="timer">Время: <span id="time-left">60</span> секунд</div>
</body> */
document.addEventListener("DOMContentLoaded", function() {
  const gameBoard = document.getElementById('game-board');
  const timeLeftDisplay = document.getElementById('time-left');
  const boardSize = 10;
  const totalCells = boardSize * boardSize;
  const cellsToFind = 10;
  let foundCells = 0;
  let timeLeft = 60;
  let timer;

  // Создание сетки
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    gameBoard.appendChild(cell);
  }

  // Выбор случайных ячеек
  const cells = document.querySelectorAll('.cell');
  const selectedCells = new Set();
  while (selectedCells.size < cellsToFind) {
    const randomIndex = Math.floor(Math.random() * totalCells);
    selectedCells.add(randomIndex);
  }

  // Обработка кликов
  gameBoard.addEventListener('click', function(event) {
    if (event.target.classList.contains('cell')) {
      const cellIndex = parseInt(event.target.dataset.index, 10);
      if (selectedCells.has(cellIndex)) {
        event.target.classList.add('found');
        selectedCells.delete(cellIndex);
        foundCells++;
        if (foundCells === cellsToFind) {
          clearInterval(timer);
          alert('Поздравляем! Вы нашли все ячейки!');
        }
      } else {
        event.target.classList.add('missed');
      }
      event.target.style.pointerEvents = 'none';
    }
  });

  // Таймер
  function startTimer() {
    timer = setInterval(function() {
      timeLeft--;
      timeLeftDisplay.textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(timer);
        alert('Время вышло! Вы проиграли.');
        cells.forEach(cell => cell.style.pointerEvents = 'none');
      }
    }, 1000);
  }

  startTimer();
});

// 5 Экранная клавиатура
/* <input type="text" id="textInput" readonly />
    <div id="keyboard"></div> */
let textInput5_2 = document.getElementById("textInput");
let keyboard5_2 = document.getElementById("keyboard");
let keys5_2 = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "CapsLock",
];

let capsLockActive = false;
keys.forEach((key) => {
  let button = document.createElement("button");
  button.textContent = key;
  if (key === "CapsLock") {
    button.addEventListener("click", () => {
      capsLockActive = !capsLockActive;
      button.style.backgroundColor = capsLockActive ? "#40ff70" : "";
    });
  } else {
    button.addEventListener("click", () => {
      if (capsLockActive) {
        textInput.value += key.toUpperCase();
      } else {
        textInput.value += key.toLowerCase();
      }
    });
  }

  keyboard.appendChild(button);
});

// 6 Линейный календарь на JavaScript
/* <div id="calendar-container">
      <div id="navigation">
        <button id="prev-month">&lt;</button>
        <p id="resMonth6_4"></p>
        <button id="next-month">&gt;</button>
      </div>
      <ul id="calendar"></ul>
    </div> */
let calendar = document.getElementById("calendar");
let resMonth = document.getElementById("resMonth");
let prevMonthBtn = document.getElementById("prev-month");
let nextMonthBtn = document.getElementById("next-month");
let months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function updateCalendar(month, year) {
  calendar.innerHTML = "";
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  resMonth.textContent = months[month] + " - " + year;
  for (let i = 1; i <= daysInMonth; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    calendar.appendChild(listItem);
  }

  if (currentMonth === month && currentYear === year) {
    let currentDayItem = calendar.querySelector(
      "li:nth-child(" + currentDate.getDate() + ")"
    );
    if (currentDayItem) {
      currentDayItem.classList.add("currentDay");
    }
  }
}

prevMonthBtn.addEventListener("click", () => {
  currentDayItem = false;
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateCalendar(currentMonth, currentYear);
});
updateCalendar(currentMonth, currentYear);

// 7 Поиск тегов на JavaScript
/* <label for="tagInput">Введите имя HTML тега:</label>
    <p id="description"></p>
    <input type="text" id="tagInput" placeholder="например, div" /> */
const tagDescriptions = {
  div: "Тег <div> является блочным элементом и используется для группировки других элементов для стилизации или манипуляции с помощью JavaScript.",
  p: "Тег <p> используется для определения абзаца текста.",
  a: "Тег <a> используется для создания гиперссылок на другие документы или ресурсы.",
  span: "Тег <span> является строчным элементом и используется для выделения части текста или других элементов внутри блока.",
  img: "Тег <img> используется для вставки изображений на веб-страницу.",
  h1: "Тег <h1> определяет самый важный заголовок первого уровня.",
  h2: "Тег <h2> определяет заголовок второго уровня.",
};
function displayTagDescription() {
  let input = document.getElementById("tagInput");
  let descriptionDiv = document.getElementById("description");
  let tagName = input.value.toLowerCase();
  if (tagDescriptions[tagName]) {
    descriptionDiv.innerText = `${tagDescriptions[tagName]}`;
  } else {
    descriptionDiv.innerText = "Описание для данного тега не найдено.";
  }
}
let input = document.getElementById("tagInput");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    displayTagDescription();
  }
});

// 8 Поиск исторических событий на JavaScript
/*  <input id="input" placeholder="Введите год и нажмите Enter" />
      <table id="table"></table> */
const historicalEvents = {
  2005: [
    {
      date: "23.04.2005",
      title: "Самое первое видео на YouTube",
      description: "Появляется самое первое видео на YouTube.",
    },
    {
      date: "16.08.2005",
      title: "Рекорд пребывания в космосе",
      description:
        "Российский космонавт Сергей Крикалёв превзошёл рекорд суммарной продолжительности пребывания в космосе.",
    },
    {
      date: "01.10.2005",
      title: "Старт Союз ТМА-7",
      description:
        "Старт космического корабля Союз ТМА-7 с международным экипажем.",
    },
  ],
  1945: [
    {
      date: "09.05.1945",
      title: "Конец Великой Отечественной войны",
      description: "Закончилась Великая Отечественная война.",
    },
    {
      date: "09.05.1945",
      title: "Освобождение Праги",
      description: "Советскими войсками освобождена Прага.",
    },
    {
      date: "24.06.1945",
      title: "Парад Победы",
      description: "В Москве на Красной площади прошёл Парад Победы.",
    },
  ],
};
let parent8 = document.getElementById("parent8");
let table8 = document.getElementById("table8");
let input8 = document.getElementById("input8");
input8.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    displayEvents();
  }
});
function displayEvents() {
  let year = input8.value;
  let events = historicalEvents[year];
  table8.innerHTML = "";
  if (events) {
    let headerRow = document.createElement("tr");
    headerRow.innerHTML = `<th>Дата</th><th>Название</th><th>Описание</th>`;
    table8.appendChild(headerRow);
    events.forEach((event) => {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${event.date}</td><td>${event.title}</td><td>${event.description}</td>`;
      table8.appendChild(row);
    });
  } else {
    table8.innerHTML = '<tr><td colspan="3">События не найдены</td></tr>';
  }
}

// 9 Гороскоп на JavaScript
/* <label for="birthdate">Введите дату рождения:</label>
    <input type="date" id="birthdate" required />
    <div>
      <input type="radio" id="today" name="day" value="today" checked />
      <label for="today">Сегодня</label>
      <input type="radio" id="tomorrow" name="day" value="tomorrow" />
      <label for="tomorrow">Завтра</label>
      <input
        type="radio"
        id="dayAfterTomorrow"
        name="day"
        value="dayAfterTomorrow"
      />
      <label for="dayAfterTomorrow">Послезавтра</label>
    </div>
    <button onclick="getHoroscope()">Показать гороскоп</button>
    <div id="horoscopeResult"></div> */
function getHoroscope() {
  const birthdate = document.getElementById("birthdate").value;
  const day = document.querySelector('input[name="day"]:checked').value;
  const horoscopeResult =
    document.getElementById("horoscopeResult");

  if (!birthdate) {
    horoscopeResult.textContent = "Пожалуйста, введите дату рождения.";
    return;
  }

  const zodiacSign = getZodiacSign(new Date(birthdate));
  const horoscope = fetchHoroscope(zodiacSign, day);

  horoscopeResult.textContent = `Ваш знак Зодиака: ${zodiacSign}. Гороскоп на выбранный день: ${horoscope}`;
}

function getZodiacSign(date) {
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  if ((month == 1 && day <= 19) || (month == 12 && day >= 22)) {
    return "Козерог";
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    return "Водолей";
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return "Рыбы";
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return "Овен";
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    return "Телец";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return "Близнецы";
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    return "Рак";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return "Лев";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return "Дева";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    return "Весы";
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return "Скорпион";
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    return "Стрелец";
  }
}

function fetchHoroscope(sign, day) {
  const horoscopes = {
    Козерог: {
      today: "Сегодня вас ждет удача в делах.",
      tomorrow: "Завтра возможны небольшие препятствия.",
      dayAfterTomorrow: "Послезавтра вас ожидает приятный сюрприз.",
    },
    Водолей: {
      today: "Сегодня вы будете полны энергии.",
      tomorrow: "Завтра ожидаются неожиданные встречи.",
      dayAfterTomorrow: "Послезавтра будет спокойный день.",
    },
    Рыбы: {
      today: "Сегодня вы найдете ответы на важные вопросы.",
      tomorrow: "Завтра вы будете окружены заботой.",
      dayAfterTomorrow: "Послезавтра принесет новые возможности.",
    },
    Овен: {
      today: "Сегодня ваш день будет насыщенным.",
      tomorrow: "Завтра вы достигнете новых высот.",
      dayAfterTomorrow: "Послезавтра вас ждет признание.",
    },
    Телец: {
      today: "Сегодня удача на вашей стороне.",
      tomorrow: "Завтра возможны новые встречи.",
      dayAfterTomorrow: "Послезавтра будет день для отдыха.",
    },
    Близнецы: {
      today: "Сегодня день для новых начинаний.",
      tomorrow: "Завтра вас ждут приятные сюрпризы.",
      dayAfterTomorrow: "Послезавтра вы получите важные новости.",
    },
    Рак: {
      today: "Сегодня вы будете в центре внимания.",
      tomorrow: "Завтра ваш день будет спокойным.",
      dayAfterTomorrow: "Послезавтра вас ждет удача.",
    },
    Лев: {
      today: "Сегодня день для творчества.",
      tomorrow: "Завтра вы почувствуете прилив энергии.",
      dayAfterTomorrow: "Послезавтра вас ждет успех.",
    },
    Дева: {
      today: "Сегодня день для планирования.",
      tomorrow: "Завтра будет день новых возможностей.",
      dayAfterTomorrow: "Послезавтра вы найдете ответы на вопросы.",
    },
    Весы: {
      today: "Сегодня ваш день будет гармоничным.",
      tomorrow: "Завтра вы будете полны энергии.",
      dayAfterTomorrow: "Послезавтра вас ждет спокойствие.",
    },
    Скорпион: {
      today: "Сегодня день для решительных действий.",
      tomorrow: "Завтра вас ждет признание.",
      dayAfterTomorrow: "Послезавтра будет день для отдыха.",
    },
    Стрелец: {
      today: "Сегодня вы будете полны вдохновения.",
      tomorrow: "Завтра возможны новые возможности.",
      dayAfterTomorrow: "Послезавтра будет день для приключений.",
    },
  };

  return horoscopes[sign][day];
}

// 10 Сайт предсказаний на JavaScript
/* <div id="timer">?</div>
      <div id="text"></div>
      <button id="start">узнать свою судьбу</button>
      <button id="stop" class="nonactive">получить предсказание</button> */
const predictions = {
  1: "Сегодня вас ждет удача и успех во всех начинаниях.",
  2: "Завтра вы встретите интересного человека, который принесет в вашу жизнь новые возможности и перспективы.",
  3: "Послезавтра вы найдете решение для давно давно беспокоящей вас проблемы, и оно будет простым и эффективным.",
  4: "В ближайшем будущем вас ждет приятный сюрприз, который принесет радость и вдохновение.",
  5: "Ваш труд и усилия будут вознаграждены, и вы достигнете значительных успехов в своей деятельности.",
  6: "Сегодня вы можете столкнуться с непредвиденными трудностями и препятствиями.",
  7: "Завтра может быть напряженным днем, когда ваше настроение и энергия будут нестабильными.",
  8: "Послезавтра вас ждут разочарования и неудачи в важном деле или проекте.",
  9: "В ближайшем будущем вы можете столкнуться с финансовыми проблемами или неожиданными расходами.",
  10: "Ваши планы могут быть нарушены из-за непредвиденных обстоятельств, что приведет к разочарованию и стрессу.",
};

let parent = document.getElementById("parent");
let timer = document.getElementById("timer");
let text = document.getElementById("text");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let intervalId;
start.addEventListener("click", function func() {
  intervalId = setInterval(updateTimer, 100);
  start.classList.add("nonactive");
  stop.classList.remove("nonactive");
  stop.classList.add("active");
  this.removeEventListener("click", func);
  text.style.display = "none";
});

stop.addEventListener("click", function () {
  clearInterval(intervalId);
  start.classList.remove("nonactive");
  stop.classList.remove("active");
  stop.classList.add("nonactive");
  start.classList.add("nonactive");
  text.style.display = "block";
});

function updateTimer() {
  const randomNumber = getRandomInt(1, 10);
  timer.textContent = randomNumber;
  text.textContent = predictions[randomNumber];
  if (randomNumber <= 5) {
    text.style.color = "green";
  } else {
    text.style.color = "red";
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 11 Автодополнение на JavaScript
/* <input id="elem" placeholder="Monaco" />
      <ul id="list"></ul>*/ 
let countries = ["Mexico", "Moldova", "Monaco", "Mongolia", "Morocco"];
let input = document.getElementById("elem");
let list = document.getElementById("list");
input.addEventListener("input", () => {
  let inputValue = input.value.toLowerCase();
  if (inputValue === "") {
    list.innerHTML = "";
    return;
  }

  let filteredCountries = countries.filter((country) =>
    country.toLowerCase().startsWith(inputValue)
  );
  list.innerHTML = "";

  filteredCountries.forEach((country) => {
    let li = document.createElement("li");
    li.textContent = country;
    li.addEventListener("click", () => {
      input.value = country;
      list.innerHTML = "";
    });
    list.appendChild(li);
  });
});

// 12 Спойлер на JavaScript
/* <p>абзац с текстом</p>
    <p>
      абзац с текстом
      <a href="" class="toggle">развернуть спойлер 1</a>
    </p>
    <p class="spoiler">скрытый спойлер 1</p>
    <p>абзац с текстом</p>
    <p>
      абзац с текстом
      <a href="" class="toggle">развернуть спойлер 2</a>
    </p>
    <p class="spoiler">скрытый спойлер 2</p>
    <p>абзац с текстом</p>*/
function initializeSpoilers() {
  document.querySelectorAll(".toggle").forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      let spoiler = toggle.closest("p").nextElementSibling;
      if (spoiler && spoiler.classList.contains("spoiler")) {
        spoiler.classList.toggle("active");
      }
    });
  });
}
initializeSpoilers();

// 13 Вкладки на JavaScript
/* <div class="menu">
        <a href="#" class="active">вкладка 1</a>
        <a href="#">вкладка 2</a>
        <a href="#">вкладка 3</a>
      </div>
      <div class="tabs">
        <div class="tab active">текст вкладки 1</div>
        <div class="tab">текст вкладки 2</div>
        <div class="tab">текст вкладки 3</div>
      </div>
*/ 
document.querySelectorAll(".menu a").forEach((tabLink, index) => {
  tabLink.addEventListener("click", (event) => {
    event.preventDefault();
    document
      .querySelector(".menu a.active")
      .classList.remove("active");
    document
      .querySelector(".tabs .tab.active")
      .classList.remove("active");
    tabLink.classList.add("active");
    document
      .querySelectorAll(".tabs .tab")
    [index].classList.add("active");
  });
});

// 14 Аккордеон на JavaScript
/* <div class="tab active">
        <div class="link">
          <a href="#">вкладка 1</a>
        </div>
        <div class="text">текст вкладки 1</div>
      </div>
      <div class="tab">
        <div class="link">
          <a href="#">вкладка 2</a>
        </div>
        <div class="text">текст вкладки 2</div>
      </div>
      <div class="tab">
        <div class="link">
          <a href="#">вкладка 3</a>
        </div>
        <div class="text">текст вкладки 3</div>
      </div> */
document.querySelectorAll("#parent .link a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let activeTab = document.querySelector("#parent .tab.active");
    if (activeTab) {
      activeTab.classList.remove("active");
    }
    let parentTab = link.closest(".tab");
    parentTab.classList.add("active");
  });
});