// 377 Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.
document.querySelector('#yourButtonId').addEventListener('click', function () {
  let div = document.querySelector('#yourDivId');
  div.style.width = '500px';
  div.style.height = '500px';
  div.style.border = '1px solid black';
});

// 378 Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.
document.querySelector('#yourButtonId').addEventListener('click', function () {
  let div = document.querySelector('#yourDivId');
  div.style.fontSize = '20px';
  div.style.borderTop = '1px solid black';
  div.style.backgroundColor = 'lightgrey';
});

// 379 Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.
document.querySelector('#yourButtonId').addEventListener('click', function () {
  let list = document.querySelector('#yourListId');
  let listItems = list.querySelectorAll('li');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.cssFloat = 'left';
  }
});

// 380 Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).
let strikeThroughButton = document.querySelector('#strikeThroughButtonId');
strikeThroughButton.addEventListener('click', function () {
  let paragraph = document.querySelector('p');
  paragraph.style.textDecoration = 'line-through';
});

let boldButton = document.querySelector('#boldButtonId');
boldButton.addEventListener('click', function () {
  let paragraph = document.querySelector('p');
  paragraph.style.fontWeight = 'bold';
});

let redButton = document.querySelector('#redButtonId');
redButton.addEventListener('click', function () {
  let paragraph = document.querySelector('p');
  paragraph.style.color = 'red';
});


// 381 Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку отменяло действие этой кнопки.
let strikeThroughButton = document.querySelector('#strikeThroughButtonId');
strikeThroughButton.addEventListener('click', function () {
  let paragraph = document.querySelector('p');
  paragraph.classList.toggle('strike-through');
});

let boldButton = document.querySelector('#boldButtonId');
boldButton.addEventListener('click', function () {
  let paragraph = document.querySelector('p');
  paragraph.classList.toggle('bold');
});

let redButton = document.querySelector('#redButtonId');
redButton.addEventListener('click', function () {
  let paragraph = document.querySelector('p');
  paragraph.classList.toggle('red');
})


