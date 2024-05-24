// 405 Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
let select = document.querySelector('#select');
let p = document.querySelector('#p');
let button = document.querySelector('#button');
button.addEventListener('click', () => {
  p.textContent = select.value;
})

// Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.
/* <select id="yearSelect">
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
  <option value="2026">2026</option>
  <option value="2027">2027</option>
  <option value="2028">2028</option>
  <option value="2029">2029</option>
  <option value="2030">2030</option>
</select> */
const yearSelect = document.querySelector('#yearSelect');
yearSelect.addEventListener('change', function () {
  const selectedYear = +(this.value);
  const isLeapYear = (selectedYear % 4 === 0 && selectedYear % 100 !== 0) || selectedYear % 400 === 0;
  const leapYearMessage = isLeapYear ? 'Год високосный' : 'Год не високосный';
  alert(leapYearMessage);
});

// 406 Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
/* <select id="daySelect">
  <option value="1">Понедельник</option>
  <option value="2">Вторник</option>
  <option value="3">Среда</option>
  <option value="4">Четверг</option>
  <option value="5">Пятница</option>
  <option value="6">Суббота</option>
  <option value="7">Воскресенье</option>
</select> */
const daySelect = document.querySelector('daySelect');
daySelect.addEventListener('change', function () {
  const selectedDay = +this.value;
  const isWeekend = selectedDay === 6 || selectedDay === 7;
  const dayTypeMessage = isWeekend ? 'Выбран выходной день' : 'Выбран рабочий день';
  alert(dayTypeMessage);
});

// 407 Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.
/* <select id="monthSelect">
  <option value="1">Январь</option>
  <option value="2">Февраль</option>
  <option value="3">Март</option>
  <option value="4">Апрель</option>
  <option value="5">Май</option>
  <option value="6">Июнь</option>
  <option value="7">Июль</option>
  <option value="8">Август</option>
  <option value="9">Сентябрь</option>
  <option value="10">Октябрь</option>
  <option value="11">Ноябрь</option>
  <option value="12">Декабрь</option>
</select> */
const monthSelect = document.getElementById('monthSelect');
const currentMonth = new Date().getMonth() + 1;
monthSelect.value = currentMonth;

// 408 Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.
/* <input type="number" id="numberInput">
<select id="selectOptions">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
  <option value="5">Option 5</option>
</select> */
const numberInput = document.querySelector('#numberInput');
const selectOptions = document.querySelector('#selectOptions');
numberInput.addEventListener('blur', function () {
  const inputValue = +numberInput.value;
  if (!isNaN(inputValue)) {
    selectOptions.selectedIndex = inputValue - 1;
  }
});

// Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.
const dayOfWeekSelect = document.querySelector('#dayOfWeek');
const currentDayOfWeek = new Date().getDay();
dayOfWeekSelect.selectedIndex = (currentDayOfWeek === 0 ? 7 : currentDayOfWeek) - 1;

// 410 Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
let select = document.querySelector('#select');
for (let option of select) {
  option.textContent += option.value;
}

// 411 Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.
let select = document.querySelector('#select');
for (let option of select){
  if (option.selected){
    option.text += "!";
  } else {
    option.text += "?";
  }
}

// 412 Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.
let select = document.querySelector('#select');
let length = select.length;
if (length > 0) {
  select[length - 1].selected = true;
}

// 413 Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.
let select = document.getElementById('select');
let button = document.getElementById('btn');
button.addEventListener('click', function () {
  console.log(select[select.selectedIndex].textContent);
})

// Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
let select = document.getElementById('select');
let button = document.getElementById('btn');
button.addEventListener('click', function () {
  let selectedOption = select[select.selectedIndex];
  selectedOption.textContent += '!';
});
