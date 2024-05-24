// 365 Дан элемент: <input id="elem" value="text"> Получите значение его атрибута value.
let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');
console.log(value);

// Дан элемент: <input id="elem" class="www zzz"> Получите значение его атрибута class.
let elem = document.querySelector('#elem');
let value = elem.getAttribute('class');
console.log(value);

// 366 Дан элемент: <input id="elem"> Установите его атрибут value в значение 'text'.
let elem = document.querySelector('#elem');
elem.setAttribute('value', 'text');

// Дан элемент: <input id="elem"> Установите ему атрибут class в значение 'valid'.
let elem = document.querySelector('#elem');
elem.setAttribute('class', 'valid');

// 367 Дан элемент: <input id="elem" value="text"> Удалите у него атрибут value.
let elem = document.querySelector('#elem');
elem.removeAttribute('value');

// 368 Дан элемент: <input id="elem" value="text"> Проверьте наличие у него атрибута value.
let elem = document.querySelector('#elem');
console.log(elem.hasAttribute('value'));

// 369 Дан следующий код: <div id="elem" data-text="str">text</div> Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
document.querySelector('#elem').addEventListener('click', function () {
  this.textContent += this.dataset.text;
})

/* Даны дивы, содержащие в атрибуте data-num свой порядковый номер:
<div data-num="1">text</>
<div data-num="2">text</div>
<div data-num="3">text</div>
<div data-num="4">text</div>
<div data-num="5">text</div>
Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер. */
let divs = document.querySelectorAll('div[data-num]');
divs.forEach(function (div) {
  div.addEventListener('click', function () {
    this.textContent += this.dataset.num;
  });
});

// Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.
let clickCount = 0;
document.querySelector('#button1').addEventListener('click', function () {
  clickCount++;
  this.setAttribute('data-clicks', clickCount);
});
document.querySelector('#button2').addEventListener('click', function () {
  let clicks = document.querySelector('#button1').getAttribute('data-clicks');
  alert("Количество кликов: " + clicks);
});

// Дан инпут: <input id="elem" data-length="5"> В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.
let inputElement = document.querySelector('#elem');
inputElement.addEventListener('blur', function () {
  let length = this.dataset.length;
  if (this.value.length !== parseInt(length)) {
    alert('Количество символов не совпадает');
  }
});

// Дан инпут: <input id="elem" data-min="5" data-max="10"> В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.
let inputElement = document.querySelector('#elem');
inputElement.addEventListener('blur', function () {
  let min = parseInt(this.dataset.min);
  let max = parseInt(this.dataset.max);
  let inputLength = this.value.length;
  if (inputLength < min || inputLength > max) {
    alert('Количество символов не входит в диапазон от ' + min + ' до ' + max);
  }
});

// 370 Дан следующий код: <div id="elem" data-product-price="1000" data-product-amount="5"> товар яблоки </div> Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.
let divElement = document.querySelector('#elem');
let price = parseInt(divElement.dataset.productPrice);
let amount = parseInt(divElement.dataset.productAmount);
divElement.addEventListener('click', function () {
  let total = price * amount;
  this.textContent += ' Цена: ' + total + ' руб.';
});

// 371 Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.
let paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].setAttribute("data-num", i + 1);
}

// 372 Дан элемент: <p id="elem" class="www ggg zzz"></p> Узнайте количество его классов.
let elem = document.querySelector('#elem');
console.log(elem.classList.length);

// Дан элемент: <p id="elem" class="www ggg zzz"></p> Переберите в цикле его классы.
let elem = document.querySelector('#elem');
let classNames = elem.classList;
for (let className of classNames) {
  console.log(className);
}

// 373 Дан элемент: <p id="elem" class="www ggg zzz"></p> Добавьте ему класс xxx.
let elem = document.querySelector('#elem');
elem.classList.add('xxx');

// 374 Дан элемент: <p id="elem" class="www ggg zzz"></p> Удалите у него класс www и класс zzz.
let elem = document.querySelector('#elem');
elem.classList.remove('www');
elem.classList.remove('zzz');

// 375 Дан элемент: <p id="elem" class="www ggg zzz"></p> Проверьте наличие у него класса ggg.
let elem = document.querySelector('#elem');
elem.classList.contains('ggg');

// 376 Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.
let elem = document.querySelector('#elem');
elem.classList.toggle('ggg');
