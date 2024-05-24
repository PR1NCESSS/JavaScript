/* 383 Дан элемент #elem:
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите первого потомка этого элемента и сделайте его текст красного цвета. */
let parent = document.querySelector('#elem');
let child = parent.firstElementChild;
child.style.color = 'red';

/* Дан элемент #elem:
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите последнего потомка этого элемента и сделайте его текст красного цвета.*/
let parent = document.querySelector('#elem');
let child = parent.lastElementChild;
child.style.color = 'red';

/* Дан элемент #elem:
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите всех потомков этого элемента и добавьте им в конец текст '!'. */
let parent = document.querySelector('#elem');
let elems = parent.children;
for (let elem of elems) {
  elem.textContent += '!';
}

/* 384 Дан элемент #elem:
<div>
	<ul>
		<li>text</li>
		<li>text</li>
		<li id="elem">text</li>
		<li>text</li>
		<li>text</li>
	</ul>
</div>
Найдите его родителя и задайте ему красную границу. */
let child = document.querySelector('#elem');
let parent = child.parentElement;
parent.style.border = '1px solid red';

/* 385 Дан элемент:
<header>
	<div>
		<p id="parent1">
			<span id="elem"></span>
		</p>
	</div>
</header>
Найдите ближайшего родителя этого элемента, являющегося тегом div. */
let elem = document.querySelector('#elem');
let parent = elem.closest('div');

/* Дан элемент:
<header>
	<div class="www">
		<p class="www">
			<span id="elem"></span>
		</p>
	</div>
</header>
Найдите ближайшего родителя этого элемента, являющегося элементом с классом www. */
let elem = document.querySelector('#elem');
let parent = elem.closest('.www');

/* 386 Дан элемент #elem:
<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа сверху и добавьте ему в конец текст '!'. */
let elem = document.querySelector('#elem');
elem.previousElementSibling.textContent += '!';

/* Дан элемент #elem:
<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа снизу и добавьте ему в конец текст '!'. */
let elem = document.querySelector('#elem');
elem.nextElementSibling.textContent += '!';

/* Дан элемент #elem:
<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'. */
let elem = document.querySelector('#elem');
let neighbour1 = elem.nextElementSibling;
neighbour1.nextElementSibling.textContent += '!';

/* Дан элемент #elem:
<ul>
	<li>text1</li>
	<li>text2</li>
	<li id="elem">text3</li>
	<li>text4</li>
	<li>text5</li>
</ul>
Поменяйте местами текст его соседа сверху и текст его соседа снизу. */
let elem = document.querySelector('#elem');
let textAbove = elem.previousElementSibling.textContent;
let textBelow = elem.nextElementSibling.textContent;
elem.previousElementSibling.textContent = textBelow;
elem.nextElementSibling.textContent = textAbove;

/* 387 Дан элемент #elem:
<div id="elem"></div>
Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст. */
let elem = document.getElementById('elem');
elem.textContent = 'div';

/* 388 Дан список:
<ul>
  <li>text</li>
  <li>text</li>
  <li>text</li>
  <li>text</li>
  <li>text</li>
</ul>
Получите все теги li по имени тега и сделайте их текст красного цвета. */
let listItems = document.getElementsByTagName('li');
for (let item of listItems){
  item.style.color = 'red';
}

/* 389 Даны элементы:
<p class="www">elem 1</p>
<p class="www">elem 2</p>
<p class="www">elem 3</p>
Получите эти элементы по имени класса и сделайте их текст красного цвета. */
let items = document.getElementsByClassName('www');
for (let item of items) {
  item.style.color = 'red';
}

/* 390 Дан элемент #parent:
<div id="parent">
  <p class="www">text</p>
  <p class="www">text</p>
  <p class="www">text</p>
  <p class="ggg">text</p>
  <p class="ggg">text</p>
  <p class="ggg">text</p>
</div>
let parent = document.querySelector('#parent');
Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2. */
let parent = document.querySelector('#parent');
let elems1 = parent.querySelectorAll('.www');
let elems2 = parent.querySelectorAll('.ggg')
