// 464 Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица.
let parent = document.querySelector('#parent');
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
  let p = document.createElement('p');
  p.textContent = elem;
  parent.appendChild(p);
  p.addEventListener('click', function () {
    this.textContent++;
  })
}

/* 465 Дан ul:
<ul id="elem"></ul>
Дан массив.Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. */
const array = ['Item 1', 'Item 2', 'Item 3'];
const ul = document.getElementById('elem');
array.forEach(function (item) {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});

// Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.
const array = ['Item 1', 'Item 2', 'Item 3'];
const ul = document.getElementById('elem');
array.forEach(function (item) {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
  li.addEventListener('click', function () {
    alert(this.textContent);
  })
});

// Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
const array = ['Item 1', 'Item 2', 'Item 3'];
const ul = document.getElementById('elem');
array.forEach(function (item) {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
  li.addEventListener('click', function () {
    this.textContent += '!';
  })
});

// Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
const array = ['Item 1', 'Item 2', 'Item 3'];
const ul = document.getElementById('elem');
array.forEach(function (item) {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
  li.addEventListener('click', function func () {
    this.textContent += '!';
    this.removeEventListener('click', func);
  })
});

// 466 Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
const table = document.getElementById('myTable');
for (let i = 0; i < 5; i++) {
  const tr = document.createElement('tr');
  for (let j = 0; j < 5; j++) {
    const td = document.createElement('td');
    td.textContent = `Строка ${i + 1}, Столбец ${j + 1}`;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

// Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
const table = document.getElementById('myTable');
for (let i = 0; i < 10; i++) {
  const tr = document.createElement('tr');
  for (let j = 0; j < 5; j++) {
    const td = document.createElement('td');
    td.textContent = `Строка ${i + 1}, Столбец ${j + 1}`;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

// Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.
const table = document.getElementById('myTable');
for (let i = 0; i < 10; i++) {
  const tr = document.createElement('tr');
  for (let j = 0; j < 5; j++) {
    const td = document.createElement('td');
    td.textContent = `x`;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

// Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', function () {
  const width = +document.getElementById('widthInput').value;
  const height = +document.getElementById('heightInput').value;
  generateTable(width, height);
});

function generateTable(width, height) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = ''; 
  const table = document.createElement('table');
  for (let i = 0; i < height; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < width; j++) {
      const cell = document.createElement('td');
      cell.textContent = `Строка ${i + 1}, Столбец ${j + 1}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  tableContainer.appendChild(table);
}


// 467 Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.
const table = document.getElementById('table');
let k = 2;
for (let i = 0; i < 5; i++){
  const tr = document.createElement('tr');
  for (let j = 0; j < 5; j++){
    const td = document.createElement('td');
    td.textContent = k++;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

// Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.
const table = document.getElementById('table');
let k = 2;
for (let i = 0; i < 5; i++) {
  const tr = document.createElement('tr');
  for (let j = 0; j < 5; j++) {
    const td = document.createElement('td');
    td.textContent = k;
    k += 2;
    tr.append(td);
  }
  table.append(tr);
}

// 468 Дан массив: let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]; Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let table = document.querySelector('#table');
for (let subArr of arr) {
  let tr = document.createElement('tr');
  for (let elem of subArr) {
    let td = document.createElement('td');
    td.textContent = elem;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

// Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let table = document.querySelector('#table');
for (let subArr of arr) {
  let tr = document.createElement('tr');
  for (let elem of subArr) {
    let td = document.createElement('td');
    td.textContent = elem ** 2;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

/* 469 Дан следующий массив с работниками:
let employees = [
  {name: 'employee1', age: 30, salary: 400},
  {name: 'employee2', age: 31, salary: 500},
  {name: 'employee3', age: 32, salary: 600},
];
Выведите элементы этого массива в виде HTML таблицы. */
let employees = [
  { name: 'employee1', age: 30, salary: 400 },
  { name: 'employee2', age: 31, salary: 500 },
  { name: 'employee3', age: 32, salary: 600 },
];
const table = document.querySelector('#table');
for (let employee of employees){
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  cell1.textContent = employee.name;
  row.appendChild(cell1);
  const cell2 = document.createElement('td');
  cell2.textContent = employee.age;
  row.appendChild(cell2);
  const cell3 = document.createElement('td');
  cell3.textContent = employee.salary;
  row.appendChild(cell3);
  table.appendChild(row);
}
// for (let employee of employees) {
//   const row = document.createElement('tr');
//   for (let key in employee){
//     const cell = document.createElement('td');
//     cell.textContent = employee[key];
//     row.appendChild(cell);
//   }
//   table.appendChild(row);
// }

// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.
const table = document.querySelector('#table');
for (let employee of employees) {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  cell1.textContent = employee.name;
  row.appendChild(cell1);
  const cell2 = document.createElement('td');
  cell2.textContent = employee.age;
  row.appendChild(cell2);
  cell2.addEventListener('click', function() {
    this.textContent++;
  })
  const cell3 = document.createElement('td');
  cell3.textContent = employee.salary;
  row.appendChild(cell3);
  table.appendChild(row);
}

// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
const table = document.querySelector('#table');
for (let employee of employees) {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  cell1.textContent = employee.name;
  row.appendChild(cell1);
  const cell2 = document.createElement('td');
  cell2.textContent = employee.age;
  row.appendChild(cell2);
  cell2.addEventListener('click', function () {
    this.textContent++;
  })
  const cell3 = document.createElement('td');
  cell3.textContent = employee.salary;
  row.appendChild(cell3);
  cell3.addEventListener('click', function () {
    this.textContent = Number(this.textContent) + this.textContent * 10 / 100;
  })
}

// 470 Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
const table = document.getElementById('table');
const addRowButton = document.getElementById('addRowButton');
function addRow() {
  const row = document.createElement('tr');
  for (let i = 0; i < 3; i++) {
    const cell = document.createElement('td');
    cell.textContent = 'X';
    row.appendChild(cell);
  }
  table.querySelector('tbody').appendChild(row);
}
addRowButton.addEventListener('click', addRow);

/* Дана таблица размером 2 на 2:
<table id="table">
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
td {
  width: 50px;
  height: 50px;
  border: 1px solid black;
}
Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку. */
const expandButton = document.getElementById('expandButton');
const table = document.getElementById('table');
expandButton.addEventListener('click', function () {
  const newRow = document.createElement('tr');
  for (let i = 0; i < table.rows[0].cells.length; i++) {
    const cell = document.createElement('td');
    newRow.appendChild(cell);
  }
  table.appendChild(newRow);
  const rows = table.querySelectorAll('#table tr');
  for (let row of rows) {
    const cell = document.createElement('td');
    row.appendChild(cell);
  }
});

// 471 Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
const table = document.getElementById('table');
const button = document.getElementById('button');

button.addEventListener('click', function() {
  let tds = document.querySelectorAll('#table td');
  for (let td of tds){
    td.textContent *= 2;
  }
})

/* 472 Дан следующий код:
<ul id="parent">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<input type="submit" id="button">
Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку. */
const button = document.querySelector('#button');
const parent = document.querySelector('#parent');
button.addEventListener('click', function (event) {
  let newLi = document.createElement('li');
  newLi.textContent = parent.lastElementChild ? Number(parent.lastElementChild.textContent) + 1 : 1;
  parent.append(newLi);
})
parent.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
})

// 474 Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
const myList = document.getElementById('myList');
const listItems = myList.querySelectorAll('li');
listItems.forEach(function (item) {
  const removeLink = document.createElement('a');
  removeLink.href = '';
  removeLink.textContent = '[x]';
  removeLink.addEventListener('click', function (event) {
    item.remove();
    event.preventDefault();
  });
  item.appendChild(removeLink);
});

// Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
const myTable = document.getElementById('myTable');
const rows = myTable.getElementsByTagName('tr');
for (let row of rows) {
  const cell = document.createElement('td');
  const deleteLink = document.createElement('a');
  deleteLink.href = '';
  deleteLink.textContent = 'Delete';
  deleteLink.addEventListener('click', function (event) {
    row.remove();
    event.preventDefault();
  });
  cell.appendChild(deleteLink);
  row.appendChild(cell);
}

// 475 Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.
let elem = document.querySelector('#elem');
let input = document.querySelector('#input');
input.value = elem.textContent;
input.addEventListener('input', function () {
  elem.textContent = this.value;
});


// 477 Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.
/* <ul id='parent'>
	  <li>1</li>
	  <li>2</li>
	  <li>3</li>
	</ul> */
let elems = document.querySelectorAll('li');
for (let elem of elems) {
  elem.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = elem.textContent;
    elem.textContent = '';
    elem.appendChild(input);
    input.addEventListener('blur', function () {
      elem.textContent = this.value;
      elem.addEventListener('click', func);
    });

    elem.removeEventListener('click', func);
  });
}

// Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.
let tds = document.querySelectorAll('#table td');
for (let td of tds) {
  td.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = td.textContent;
    td.textContent = '';
    td.appendChild(input);
    input.addEventListener('blur', function () {
      td.textContent = this.value;
      td.addEventListener('click', func);
    });
    td.removeEventListener('click', func);
  });
}

/* 478 Дан следующий HTML код:
<div id="parent">
  <p><span>text1</span></p>
  <p><span>text2</span></p>
  <p><span>text3</span></p>
</div>
Добавьте ссылку на удаление в конец каждого абзаца.
Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования. */
/* <div id="parent">
  <p><span>text1</span><a href='#'>remove</a></p>
  <p><span>text2</span><a href='#'>remove</a></p>
  <p><span>text3</span><a href='#'>remove</a></p>
</div> */
let elems = document.querySelectorAll('#parent p span');
for (let elem of elems) {
  let remove = elem.nextElementSibling;
  elem.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = elem.textContent;
    elem.textContent = '';
    elem.appendChild(input);
    input.addEventListener('blur', function () {
      elem.textContent = this.value;
      elem.addEventListener('click', func);
    });
    elem.removeEventListener('click', func);
  });
  remove.addEventListener('click', function (event) {
    elem.remove();
    event.preventDefault();
  });
}

/* Пусть теперь изначально тегов span нет:
<div id="parent">
	<p>text1</p>
	<p>text2</p>
	<p>text3</p>
</div>
Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление. */
let elems = document.querySelectorAll('#parent p');
for (let elem of elems) {
  let span = document.createElement('span');
  span.textContent = elem.textContent;
  elem.textContent = '';
  elem.appendChild(span);
  span.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = span.textContent;
    span.textContent = '';
    span.insertAdjacentElement('afterend', input);
    input.addEventListener('blur', function () {
      span.textContent = this.value;
      span.addEventListener('click', func);
      this.remove();
    });
    span.removeEventListener('click', func);
  });
  let remove = document.createElement('a');
  remove.href = '#';
  remove.textContent = 'remove';
  elem.appendChild(remove);
  remove.addEventListener('click', function (event) {
    elem.remove();
    event.preventDefault();
  });
}

/* 479 Дан следующий HTML код:
<p>text1</p>
<p>text2</p>
<p>text3</p>
Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет). */
/* .linethrough{
  text-decoration: line-through;
} */
let elems = document.querySelectorAll('p');
for (let elem of elems) {
  let span = document.createElement('span');
  span.textContent = elem.textContent;
  elem.textContent = '';
  elem.appendChild(span);
  let lineThrough = document.createElement('a');
  lineThrough.href = '#';
  lineThrough.textContent = 'click';
  elem.appendChild(lineThrough);
  lineThrough.addEventListener('click', function (event) {
    span.classList.add('linethrough')
    event.preventDefault();
  });
}

// Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).
let elems = document.querySelectorAll('p');
for (let elem of elems) {
  let span = document.createElement('span');
  span.textContent = elem.textContent;
  elem.textContent = '';
  elem.appendChild(span);
  let lineThrough = document.createElement('a');
  lineThrough.href = '#';
  lineThrough.textContent = 'click';
  elem.appendChild(lineThrough);
  lineThrough.addEventListener('click', function (event) {
    span.classList.add('linethrough');
    event.preventDefault();
    this.remove()
  });
}

// Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.
/* .greenbg{
  background-color: green;
} */
const table = document.getElementById('table');
const rows = table.getElementsByTagName('tr');
for (let row of rows) {
  const cell = document.createElement('td');
  const greenLink = document.createElement('a');
  greenLink.href = '#';
  greenLink.textContent = 'green';
  greenLink.addEventListener('click', function (event) {
    row.classList.add('greenbg');
    event.preventDefault();
  });
  cell.appendChild(greenLink);
  row.appendChild(cell);
}

// Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие.
const table = document.getElementById('table');
const rows = table.getElementsByTagName('tr');
for (let row of rows) {
  const cell = document.createElement('td');
  const greenLink = document.createElement('a');
  greenLink.href = '#';
  greenLink.textContent = 'green';
  greenLink.addEventListener('click', function (event) {
    row.classList.toggle('greenbg');
    event.preventDefault();
  });
  cell.appendChild(greenLink);
  row.appendChild(cell);
}

// 480 Модифицируйте мой код так, чтобы была только одна кнопка. Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается.
/* <p id="elem">text</p>
<input type="submit" id="hide" value="hide"> */
/* .hidden {
	display: none;
} */
let elem = document.querySelector('#elem');
let hide = document.querySelector('#hide');
hide.addEventListener('click', function () {
  elem.classList.toggle('hidden');
});

// 482 Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.
/* <ul id='parent'>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul> */
/* .active{
  background-color: red;
} */
let items = document.querySelectorAll('#parent li');
for (let item of items) {
  item.addEventListener('click', function () {
    this.classList.add('active');
  });
}

// Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.
let items = document.querySelectorAll('#parent li');
for (let item of items) {
  item.addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

// 484 Дан массив. Выведите его элементы в виде списка ul.
const array = ['Item 1', 'Item 2', 'Item 3'];
const ul = document.getElementById('elem');
array.forEach(function (item) {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});

// Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.
const array = ['Item 1', 'Item 2', 'Item 3'];
const ul = document.getElementById('elem');
array.forEach(function (item) {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
  li.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = this.textContent;
    this.textContent = '';
    this.appendChild(input);
    input.addEventListener('blur', function () {
      li.textContent = this.value;
      li.addEventListener('click', func);
    });
    this.removeEventListener('click', func);
  });
});

// Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.
const array = ['Item 1', 'Item 2', 'Item 3'];
const ul = document.getElementById('elem');
const button = document.getElementById('button')
array.forEach(function (item) {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});
button.addEventListener('click', function () {
  const newLi = document.createElement('li');
  newLi.textContent = 'New item';
  ul.appendChild(newLi);
});
ul.addEventListener('click', function func(event) {
  let li = event.target.closest('li');
  if (li) {
    let input = document.createElement('input');
    input.value = li.textContent;
    li.textContent = '';
    li.appendChild(input);
    input.addEventListener('blur', function () {
      li.textContent = this.value;
      ul.addEventListener('click', func);
    });
    ul.removeEventListener('click', func);
  }
});

// Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.
const array = ['Item 1', 'Item 2', 'Item 3'];
const ul = document.getElementById('elem');
const button = document.getElementById('button');

function addListItem(item) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const remove = document.createElement('a');
  span.textContent = typeof item === 'object' ? 'New item ' : `${item} `;
  ul.appendChild(li);
  li.appendChild(span);
  remove.href = '#';
  remove.textContent = 'remove';
  li.appendChild(remove);
  remove.addEventListener('click', function (event) {
    li.remove();
    event.preventDefault();
  });
}
array.forEach(addListItem);
button.addEventListener('click', addListItem);

ul.addEventListener('click', function func(event) {
  let span = event.target.closest('span');
  if (span) {
    let input = document.createElement('input');
    input.value = span.textContent;
    span.textContent = '';
    span.insertAdjacentElement('afterend', input);
    input.addEventListener('blur', function () {
      span.textContent = `${this.value} `;
      ul.addEventListener('click', func);
      this.remove();
    });
  }
});

// Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.
const array = ['Item 1', 'Item 2', 'Item 3'];
const ul = document.getElementById('elem');
const button = document.getElementById('button');

function addListItem(item) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const remove = document.createElement('a');
  const lineThrough = document.createElement('a');
  span.textContent = typeof item === 'object' ? 'New item ' : `${item} `;
  ul.appendChild(li);
  li.appendChild(span);
  remove.href = '#';
  remove.textContent = 'remove';
  li.appendChild(remove);
  li.appendChild(document.createTextNode('\u2009'));
  lineThrough.href = '#';
  lineThrough.textContent = 'linethrough';
  li.appendChild(lineThrough);
  remove.addEventListener('click', function (event) {
    li.remove();
    event.preventDefault();
  });
  lineThrough.addEventListener('click', function (event) {
    span.classList.toggle('linethrough');
    event.preventDefault();
  })
}
array.forEach(addListItem);
button.addEventListener('click', addListItem);

ul.addEventListener('click', function func(event) {
  let span = event.target.closest('span');
  if (span) {
    let input = document.createElement('input');
    input.value = span.textContent;
    span.textContent = '';
    span.insertAdjacentElement('afterend', input);
    input.addEventListener('blur', function () {
      span.textContent = `${this.value} `;
      ul.addEventListener('click', func);
      this.remove();
    });
  }
});

/* Дан следующий массив с работниками:
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
Выведите этих работников в HTML таблице. */
let employees = [
  { name: 'employee1', age: 30, salary: 400 },
  { name: 'employee2', age: 31, salary: 500 },
  { name: 'employee3', age: 32, salary: 600 },
];
const table = document.querySelector('#table');
for (let employee of employees) {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  cell1.textContent = employee.name;
  row.appendChild(cell1);
  const cell2 = document.createElement('td');
  cell2.textContent = employee.age;
  row.appendChild(cell2);
  const cell3 = document.createElement('td');
  cell3.textContent = employee.salary;
  row.appendChild(cell3);
  table.appendChild(row);
}

// Добавьте ячейкам созданной таблицы возможность редактирования.
let employees = [
  { name: 'employee1', age: 30, salary: 400 },
  { name: 'employee2', age: 31, salary: 500 },
  { name: 'employee3', age: 32, salary: 600 },
];
const table = document.querySelector('#table');
for (let employee of employees) {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  cell1.textContent = employee.name;
  row.appendChild(cell1);
  const cell2 = document.createElement('td');
  cell2.textContent = employee.age;
  row.appendChild(cell2);
  const cell3 = document.createElement('td');
  cell3.textContent = employee.salary;
  row.appendChild(cell3);
  table.appendChild(row);
}
let tds = document.querySelectorAll('#table td');
for (let td of tds) {
  td.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = td.textContent;
    td.textContent = '';
    td.appendChild(input);
    input.addEventListener('blur', function () {
      td.textContent = this.value;
      td.addEventListener('click', func);
    });
    td.removeEventListener('click', func);
  });
}

// Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.
let employees = [
  { name: 'employee1', age: 30, salary: 400 },
  { name: 'employee2', age: 31, salary: 500 },
  { name: 'employee3', age: 32, salary: 600 },
];
const table = document.querySelector('#table');
for (let employee of employees) {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  cell1.textContent = employee.name;
  row.appendChild(cell1);
  const cell2 = document.createElement('td');
  cell2.textContent = employee.age;
  row.appendChild(cell2);
  const cell3 = document.createElement('td');
  cell3.textContent = employee.salary;
  row.appendChild(cell3);
  table.appendChild(row);
}
let tds = document.querySelectorAll('#table td');
for (let td of tds) {
  td.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = td.textContent;
    td.textContent = '';
    td.appendChild(input);
    input.addEventListener('blur', function () {
      td.textContent = this.value;
      td.addEventListener('click', func);
    });
    td.removeEventListener('click', func);
  });
}

const rows = table.getElementsByTagName('tr');
for (let row of rows) {
  const cell = document.createElement('td');
  const deleteLink = document.createElement('a');
  deleteLink.href = '';
  deleteLink.textContent = 'Delete';
  deleteLink.addEventListener('click', function (event) {
    row.remove();
    event.preventDefault();
  });
  cell.appendChild(deleteLink);
  row.appendChild(cell);
}

// Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников.
let employees = [
  { name: 'employee1', age: 30, salary: 400 },
  { name: 'employee2', age: 31, salary: 500 },
  { name: 'employee3', age: 32, salary: 600 },
];
const table = document.querySelector('#table');
for (let employee of employees) {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  cell1.textContent = employee.name;
  row.appendChild(cell1);
  const cell2 = document.createElement('td');
  cell2.textContent = employee.age;
  row.appendChild(cell2);
  const cell3 = document.createElement('td');
  cell3.textContent = employee.salary;
  row.appendChild(cell3);
  table.appendChild(row);
}

// Функция добавления ячейки с ссылкой на удаление строки
function addDelete(row) {
  const cellDelete = document.createElement('td');
  const deleteLink = document.createElement('a');
  deleteLink.href = '';
  deleteLink.textContent = 'Delete';
  deleteLink.addEventListener('click', function (event) {
    row.remove();
    event.preventDefault();
  });
  cellDelete.appendChild(deleteLink);
  row.appendChild(cellDelete);
}

// Добавление к существующим строкам новые ячейки с ссылками на удаление этих строк
const rows = table.getElementsByTagName('tr');
for (let row of rows) {
  addDelete(row);
}

// Создание инпутов и кнопки на странице
const inputName = document.createElement('input');
const inputAge = document.createElement('input');
const inputSalary = document.createElement('input');
const button = document.createElement('button');
inputName.setAttribute('placeholder', 'Имя');
inputAge.setAttribute('placeholder', 'Возраст');
inputSalary.setAttribute('placeholder', 'Зарплата');
button.textContent = 'Добавить';
table.insertAdjacentElement('afterend', button);
table.insertAdjacentElement('afterend', inputSalary);
table.insertAdjacentElement('afterend', inputAge);
table.insertAdjacentElement('afterend', inputName);

// Кнопка добавления новой строки в таблицу с данными из инпутов
button.addEventListener('click', function () {
  const newRow = document.createElement('tr');
  let inputNameValue = inputName.value;
  let inputAgeValue = inputAge.value;
  let inputSalaryValue = inputSalary.value;
  const cellName = document.createElement('td');
  cellName.textContent = inputNameValue;
  newRow.appendChild(cellName);
  const cellAge = document.createElement('td');
  cellAge.textContent = inputAgeValue;
  newRow.appendChild(cellAge);
  const cellSalary = document.createElement('td');
  cellSalary.textContent = inputSalaryValue;
  newRow.appendChild(cellSalary);
  addDelete(newRow);
  table.appendChild(newRow);
})

// Редактирование ячеек (в том числе новых)
table.addEventListener('click', function func(event) {
  let td = event.target.closest('td');
  if (td) {
    let input = document.createElement('input');
    input.value = td.textContent;
    td.textContent = '';
    td.insertAdjacentElement('afterend', input);
    input.addEventListener('blur', function () {
      td.textContent = this.value;
      table.addEventListener('click', func);
      this.remove();
    });
  }
});




