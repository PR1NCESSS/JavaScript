// 396 Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
const textarea = document.querySelector('#myTextarea');
const paragraph = document.querySelector('#myParagraph');
textarea.addEventListener('blur', function () {
  paragraph.textContent = textarea.value;
});

// 397 Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
const input = document.querySelector('#myInput');
const button = document.querySelector('#myButton');
button.addEventListener('click', function () {
  input.disabled = true;
});

// Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
const input = document.querySelector('#myInput');
const button1 = document.querySelector('#myButton1');
const button2 = document.querySelector('#myButton2');
button1.addEventListener('click', function () {
  input.disabled = true;
});
button2.addEventListener('click', function () {
  input.disabled = false;
});

// Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.
const input = document.querySelector('#myInput');
const checkButton = document.querySelector('#checkButton');
checkButton.addEventListener('click', function () {
  if (input.disabled) {
    alert('Инпут заблокирован');
  } else {
    alert('Инпут разблокирован');
  }
});

// 398 Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
const checkbox = document.querySelector("#elem");
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

button1.addEventListener('click', function(){
  checkbox.checked = true;
})
button2.addEventListener('click', function () {
  checkbox.checked = false;
})

// Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.
const checkbox = document.querySelector('#myCheckbox');
const changeButton = document.querySelector('#changeButton');
const messageParagraph = document.querySelector('#message');
changeButton.addEventListener('click', function () {
  if (checkbox.checked) {
    messageParagraph.textContent = 'привет';
  } else {
    messageParagraph.textContent = 'пока';
  }
});

// 399 Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
const checkbox = document.querySelector('#checkbox');
const button = document.querySelector('#button');
button.addEventListener('click', function () {
  checkbox.disabled = !checkbox.disabled;
});

// 400 Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('#button');
let paragraph = document.querySelector('#paragraph');
button.addEventListener('click', () => {
  for (let radio of radios){
    if (radio.checked){
      paragraph.textContent = radio.value;
    }
  }
})

// 401 Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
let elem = document.querySelector('#elem');
let p = document.querySelector('#p');
elem.addEventListener('change', function () {
  p.textContent = elem.value;
});

// Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
const checkbox = document.querySelector('#checkbox');
checkbox.addEventListener('change', function () {
  alert(this.value);
});

// Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.
const input = document.querySelector('#input');
input.addEventListener('change', function () {
  if (this.value.length < 5) {
    this.classList.remove('red-border');
    this.classList.add('green-border');
  } else {
    this.classList.remove('green-border');
    this.classList.add('red-border');
  }
});

// 402 Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
const input = document.querySelector('#input');
input.addEventListener('input', function () {
  if (this.value.length === 5) {
    alert('Длина текста достигла 5 символов!');
  }
});

// Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.
const textInput = document.querySelector('#textInput');
const counter = document.querySelector('#counter');
textInput.addEventListener('input', function () {
  const remaining = 5 - this.value.length;
  if (remaining >= 0) {
    counter.textContent = `Осталось ${remaining} символов`;
  } else {
    counter.textContent = `Превышено на ${Math.abs(remaining)} символов`;
  }
});

// 403 Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.
const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');
firstInput.addEventListener('input', function () {
  if (this.value.length === 2) {
    secondInput.focus();
  }
});
secondInput.addEventListener('input', function () {
  if (this.value.length === 2) {
    this.blur();
  }
});
