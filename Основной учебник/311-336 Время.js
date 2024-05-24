// 311 Выведите на экран текущий день.
let date = new Date();
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());

// 312 Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.
function addZero(num) {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

let date = new Date();
console.log(`${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())} ${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`)

// 313 Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.
let date = '2024-02-29';
let newDate = date.split('-').reverse().join('.');
console.log(newDate);

// 314 Выведите на экран номер текущего дня недели.
let date = new Date();
console.log(date.getDay());

// Определите, является ли текущий день недели выходным или рабочим днем.
let date = new Date();
let dayOfWeek = date.getDay()
if (dayOfWeek === 0 || dayOfWeek === 6){
  console.log('Сегодня выходной');
} else {
  console.log('Сегодня рабочий день');
}

// Определите сколько дней осталось до ближайшего воскресенья.
let date = new Date();
let dayOfWeek = date.getDay();
console.log(`До ближайшего воскресенья осталось ${7-dayOfWeek} дня`);

// 315 Пусть дан следующий массив: let months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']; Выведите с помощью этого массива название текущего месяца.
let date = new Date();
let months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
let month = date.getMonth();
console.log(months[month]);

// 316 Узнайте, какой день недели был в ваш день рождения.
let date = new Date(2005, 9, 11);
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);

// 317 Выведите на экран timestamp, соответствующий дате 1 января 2025 года.
let date = new Date(2025, 0, 1);
console.log(date.getTime());

// 318 Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.
let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);
let diff = date2.getTime() - date1.getTime();
console.log(diff / (1000 * 60 * 60 * 24));

// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.
let now = new Date();
let birthdate = new Date(2005, 9, 11);
let diff = now.getTime() - birthdate.getTime();
console.log(diff / (1000 * 60 * 60 * 24 * 30));

// 319 Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.
let now = new Date(2010, 1, 15);
let date = new Date(2000, 8, 1);
let diff = now - date;
console.log(diff);     

// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.
let now = new Date(2010, 1, 15);
let date = new Date(2000, 8, 1);
let diff = now - date;
console.log(diff / (1000 * 60 * 60 * 24)); 

// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.
let now = new Date(2010, 1, 15);
let date = new Date(2000, 8, 1);
let diff = now - date;
console.log(diff / (1000 * 60 * 60 * 24 * 30));

// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.
let now = new Date(2010, 1, 15);
let date = new Date(2000, 8, 1);
let diff = now - date;
console.log(diff / (1000 * 60 * 60 * 24 * 365));

// 321 Оформите этот способ решения проблемы в виде функции, которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.
function getCountDays(year, month){
  let date = new Date(year, month+1, 0);
  return date.getDate();
}

// Определите, какой день недели будет в последнем дне пятого месяца 2025 года.
let date = new Date(2025, 5, 0);
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let day = date.getDay();
console.log(date[day]);

// 322 Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.
function isLeap(year){
  let date = new Date(year, 2, 0);
  return date.getDate() === 29;
}

// 323 Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, если дата корректна и false, если нет.
function checkDate(year, month, day) {
  let date = new Date(year, month, day);
  return date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
}

// 324 Определите, какой день недели будет 31 декабря текущего года.
let now = new Date();
let date = new Date(now.getFullYear(), 11, 31);
console.log(date.getDay());

// 325 Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
console.log(date.getDay());

// 326 Определите, какой день недели будет 31 декабря следующего года.
let now = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);
console.log(date.getDay());

// Определите, какой день недели будет через год в такую же дату, как сегодня.
let now = new Date();
let date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log(date.getDay());

// Определите, какой день недели был год назад в такую же дату, как сегодня.
let now = new Date();
let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
console.log(date.getDay());

// 327 Определите, сколько дней между 1 января и 10 сентября текущего года.
let now = new Date();
let date1 = new Date(now.getFullYear(), 0, 1);
let date2 = new Date(now.getFullYear(), 8, 10);
console.log((date2 - date1) / 1000 / 60 / 60 / 24);

// Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.
let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), 20);
let date2 = new Date(now.getFullYear(), now.getMonth() + 1, 10);
console.log((date2 - date1) / 1000 / 60 / 60 / 24);

// 328 Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
console.log((now - date) / 1000 / 60 / 60);

// 329 Определите, сколько часов прошло между началом дня и текущим моментом времени.
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log((now - date) / 1000 / 60 / 60);

// 330 Определите, сколько часов осталось до конца дня.
let now = new Date();
let end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
console.log((end - now) / 1000 / 60 / 60);

// 331 Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.
let now = new Date();
let nowYear = now.getFullYear();
let i = 0;
for (let year = 2000; year < nowYear; year++) {
  let date = new Date(year, 0, 1);
  let day = date.getDay();
  if (day === 0 || day === 6) {
    i++;
  }
}
console.log(i);

// 332 Определите, сколько секунд прошло с начала дня до настоящего момента времени.
let date = new Date();
let startOfDay = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate());;
console.log((date - startOfDay) / 1000);

// Определите, сколько секунд осталось до конца дня.
let date = new Date();
let endOfDay = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  23,
  59,
  59,
  999
);
console.log((endOfDay - date) / 1000);

// Определите, сколько дней осталось до нового года.
let date = new Date();
let endOfYear = new Date(date.getFullYear(), 11, 31, 23, 59, 59, 999);
console.log((endOfYear - date) / (1000 * 60 * 60 * 24));

// Определите, сколько пятниц 13-е в текущем году.
function countFriday13ths(currentYear) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    let date = new Date(currentYear, month, 13);
    if (date.getDay() === 5) {
      count++;
    }
  }

  return count;
}
let currentYear = new Date().getFullYear();
let friday13thsCount = countFriday13ths(currentYear);
console.log(`В текущем году будет ${friday13thsCount} пятниц 13-е.`);

// Определите, какой год был 3 месяца назад.
let date = new Date();
let currentYear = date.getFullYear();
let yearThreeMonthsAgo = currentYear - Math.floor(3 / 12);
console.log(`Год, который был 3 месяца назад: ${yearThreeMonthsAgo}`);

// Определите, какой день недели будет в последнем дне текущего месяца.
let date = new Date();
let lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
let dayOfWeek = lastDayOfMonth.getDay();
let daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
console.log(`Последний день текущего месяца будет ${daysOfWeek[dayOfWeek]}.`);

// Напишите код, который будет определять, високосный ли текущий год.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
let currentYear = new Date().getFullYear();
if (isLeapYear(currentYear)) {
  console.log(`${currentYear} год високосный.`);
} else {
  console.log(`${currentYear} год не високосный.`);
}

// Напишите код, который будет находить предыдущий високосный год.
function findPreviousLeapYear() {
  let currentYear = new Date().getFullYear();
  let previousLeapYear = currentYear - 1;
  while (
    previousLeapYear % 4 !== 0 ||
    (previousLeapYear % 100 === 0 && previousLeapYear % 400 !== 0)
  ) {
    previousLeapYear--;
  }
  return previousLeapYear;
}
let previousLeapYear = findPreviousLeapYear();
console.log(previousLeapYear);

// Напишите код, который будет находить следующий високосный год.
function findNextLeapYear(year) {
  while (!isLeapYear(++year)) { }
  return year;
}
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
let currentYear = new Date().getFullYear();
let nextLeapYear = findNextLeapYear(currentYear);
console.log(`Следующий високосный год: ${nextLeapYear}.`);

// 333 Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
let date1 = "2020-11-31";
let date2 = "2020-12-01";
if (date1 > date2) {
  console.log("Первая дата больше второй.");
} else if (date1 < date2) {
  console.log("Первая дата меньше второй.");
} else {
  console.log("Даты равны.");
}

// 334 Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
let date1 = "09-21";
let date2 = "09-23";
if (date1 > date2) {
  console.log("Первая дата больше второй.");
} else if (date1 < date2) {
  console.log("Первая дата меньше второй.");
} else {
  console.log("Даты равны.");
}


// 335 Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.
function zodiacSign(month, day) {
  month = parseInt(month, 10);
  day = parseInt(day, 10);
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "Овен";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "Телец";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return "Близнецы";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return "Рак";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "Лев";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "Дева";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "Весы";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "Скорпион";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "Стрелец";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) { console.log("Даты равны.");
    return "Козерог";
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "Водолей";
  } else {
    return "Рыбы";
  }
}
let month = "03";
let day = "25";
let sign = zodiacSign(month, day);
console.log(`Знак Зодиака для даты ${month}-${day}: ${sign}.`);

// 336 Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий полдень текущего дня. Сравните два этих объекта и определите, был ли уже полдень или нет.
let currentDate = new Date();
let midday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 0, 0, 0);
if (currentDate.getTime() >= midday.getTime()) {
  console.log("Уже полдень");
} else {
  console.log("Еще не полдень");
}

// Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий 15 число текущего месяца. Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.
let date = new Date();
let halfwayDate = new Date(date.getFullYear(), date.getMonth(), 15, 0, 0, 0, 0);
if (date >= halfwayDate) {
  console.log("Прошла уже половина месяца.");
} else {
  console.log("Еще не прошла половина месяца.");
}




