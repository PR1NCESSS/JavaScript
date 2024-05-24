/* 453 Дан ol:
<ol id="elem"></ol>
Вставьте ему в конец li с текстом 'item'. */
const olElement = document.querySelector('#elem');
const liElement = document.createElement('li');
liElement.textContent = 'item';
olElement.appendChild(liElement);

/* Дан ol и кнопка:
<ol id="elem"></ol>
<button id="button">click me</button>
Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'. */
const olElement = document.querySelector('#elem');
const button = document.querySelector('#button');
function addItem() {
  const liElement = document.createElement('li');
  liElement.textContent = 'item';
  olElement.appendChild(liElement);
}
button.addEventListener('click', addItem);

// 454 Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
const ol = document.querySelector('#elem');
const button = document.querySelector('#button');
function addItem() {
  const li = document.createElement('li');
  li.textContent = 'Item';
  ol.appendChild(li);
  li.addEventListener('click', function () {
    this.textContent += '!';
  });
}
button.addEventListener('click', addItem);

// 455 Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.
const ul = document.querySelector('#list');
for (let i = 1; i <= 10; i++) {
  const li = document.createElement('li');
  li.textContent = i;
  ul.appendChild(liElement);
}

// 456 Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
const container = document.querySelector('#container');
const output = document.querySelector('#output');
for (let i = 1; i <= 5; i++) {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Input ' + i;
  container.appendChild(input);
  input.addEventListener('blur', function () {
    output.textContent += this.value + ' ';
  });
}

/* 457 Дан следующий код:
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
Сделайте так, чтобы любая li удалялась по клику на нее. */
const list = document.querySelector('#list');
const listItems = list.querySelectorAll('li');
listItems.forEach(function (item) {
  item.addEventListener('click', function () {
    this.remove();
  });
});

/* Дан следующий код:
<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<input type="submit" id="button">
Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent. */
const button = document.querySelector('#button');
const parent = document.querySelector('#parent');
button.addEventListener('click', function () {
  const lastItem = parent.lastElementChild;
  if (lastItem) {
    lastItem.remove();
  }
});

/* 458 Дан ul:
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'. */
const ul = document.getElementById('elem');
ul.prepend(document.createElement('li').textContent = 'start');
ul.append(document.createElement('li').textContent = 'finish');

/* 459 Дан элемент #elem:
<ul id="parent">
  <li>text</li>
  <li>text</li>
  <li id="elem">text</li>
  <li>text</li>
  <li>text</li>
</ul>
Вставьте перед этим элементом элемент с текстом 'new'. */
const parent = document.querySelector('parent');
const elem = document.querySelector('elem');
const newElement = document.createElement('li');
newElement.textContent = 'new';
parent.insertBefore(newElement, elem);

// Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.
const parent = document.querySelector('parent');
const elem = document.querySelector('elem');
const newElement = document.createElement('li');
newElement.textContent = 'new';
parent.insertBefore(newElement, elem);
newElement.addEventListener('click', function () {
  this.textContent += '!';
});

/* 460 Дан элемент:
<div id="elem" style="border: 1px solid red;">
  <p>text</p>
  <p>text</p>
  <p>text</p>
</div>
Вставьте перед ним абзац с текстом '!!!'.*/
const elem = document.querySelector('#elem'); 
let p = document.createElement('p');
p.textContent = '!!!';
elem.insertAdjacentElement('beforeBegin', p);

/* Дан элемент:
<div id="elem" style="border: 1px solid red;">
  <p>text</p>
  <p>text</p>
  <p>text</p>
</div>
Вставьте после него абзац с текстом '!!!'. */
const elem = document.querySelector('#elem'); 
let p = document.createElement('p');
p.textContent = '!!!';
elem.insertAdjacentElement('afterEnd', p);

/* Дан элемент:
<div id="elem" style="border: 1px solid red;">
  <p>text</p>
  <p>text</p>
  <p>text</p>
</div>
Вставьте ему в начало абзац с текстом '!!!'. */
const elem = document.querySelector('#elem'); 
let p = document.createElement('p');
p.textContent = '!!!';
elem.insertAdjacentElement('afterBegin', p);

/* Дан элемент:
<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте ему в конец абзац с текстом '!!!'. */
const elem = document.querySelector('#elem'); 
let p = document.createElement('p');
p.textContent = '!!!';
elem.insertAdjacentElement('beforeEnd', p);

/* 461 Дан элемент:
<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Дан элемент. Вставьте перед ним следующий тег:
<div class="www"><p>text</p><p>text</p><input></div> */
const elem = document.querySelector('#elem');
const htmlToInsert = '<div class="www"><p>text</p><p>text</p><input></div>';
elem.insertAdjacentHTML('beforebegin', htmlToInsert);

// 462 Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
const input = document.getElementById('input');
const cloneButton = document.getElementById('cloneButton');
cloneButton.addEventListener('click', function () {
  const clonedInput = input.cloneNode(true);
  input.parentNode.insertBefore(clonedInput, input);
});

/* 463 Дан элемент:
<div id="elem" class="www"></div>
Проверьте, является ли этот элемент элементом с классом www. */
const elem = document.querySelector('#elem');
if (elem.matches('.www')) {
  console.log('Элемент имеет класс "www"');
} else {
  console.log('Элемент не имеет класса "www"');
}

// Дан элемент. Проверьте, является ли этот элемент абзацем.
const elem = document.querySelector('#elem');
if (elem.matches('p')) {
  console.log('Элемент является абзацем');
} else {
  console.log('Элемент не является абзацем');
}

/* Даны две переменные elem1 и elem2, содержащие два элемента:
<div id="elem1">
	<p id="elem2"></p>
</div>
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
Проверьте, является ли элемент из elem2 потомком элемента из elem1. */
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
if (elem1.contains(elem2)) {
  console.log('elem2 является потомком elem1');
} else {
  console.log('elem2 не является потомком elem1');
}

