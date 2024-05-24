// №80 Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран все его элементы.
let daysOfWeek = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
};
console.log(daysOfWeek);

// №81 Создайте объект с ключами от 1 до 12, в качестве значений содержащий названия месяцев. Выведите этот объект в консоль.
let months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
};
console.log(months);

// №82 Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
let user = {
  name: 'John',
  surname: 'Doe',
  patronymic: 'Smith'
};
console.log(`${user.surname} ${user.name} ${user.patronymic}`);

// №83 Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.
let date = {
  year: 2024,
  month: 1,
  day: 18
};
console.log(`${date.year}-${date.month}-${date.day}`);

// №84 Исправьте ошибки, допущенные в коде:
let obj = {
  '1a': 1,
  'b2': 2,
  'с-с': 3,
  'd 4': 4,
  'e5': 5
};
console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['с-с']);
console.log(obj['d 4']);
console.log(obj.e5);

// №85 Дан объект: let obj = { x: 1, y: 2, z: 3 }Возведите в квадрат каждый элемент этого объекта.
let obj = { x: 1, y: 2, z: 3 };
obj.x **= 2;
obj.y **= 2;
obj.z **= 2;

// №86 Создайте пустой объект, а затем заполните его значениями.
let emptyObj = {};
emptyObj.name = 'John';
emptyObj.age = 25;
emptyObj.city = 'New York';

// №88 Получите массив ключей следующего объекта: let obj = { x: 1, y: 2, z: 3 };
let obj = { x: 1, y: 2, z: 3 };
let keysArray = Object.keys(obj);
console.log(keysArray);

// №89 Найдите количество элементов в следующем объекте: let obj = { x: 1, y: 2, z: 3 };
let obj = { x: 1, y: 2, z: 3 };
let count = Object.keys(obj).length;
console.log(count);

// №90 Дан следующий объект: let obj = { x: 1, y: 2, z: 3 }; Дана переменная key, в которой хранится один из ключей нашего объекта.Выведите с помощью этой переменной соответствующий элемент объекта.
let obj = { x: 1, y: 2, z: 3 };
let key = 'y';
console.log(obj[key]);

// №93 Дан объект: let obj = {x: 1, y: 2, z: 3} Даны переменные: let key1 = 'x' let key2 = 'y' let key3 = 'z' Сделайте так, чтобы ключи объекта брались из этих переменных.
let key1 = 'x';
let key2 = 'y';
let key3 = 'z';
let obj = {
  [key1]: 1,
  [key2]: 2,
  [key3]: 3
};

// №102 Перепишите код через описанный подход:
const arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];
console.log(res);

// №103 В следующих задачах некоторый программист написал код и, возможно, допустил в нем ошибки. Вы должны проверить, делает ли код то, что описано. Если код работает некорректно, вы должны исправить ошибки. Код должен вывести элемент объекта: let obj = { x: 1, y: 2, z: 3 }; console.log(obj[x]);
let obj = { x: 1, y: 2, z: 3 };
console.log(obj['x']);

// Код должен вывести элемент объекта по ключу из переменной: let obj = { x: 1, y: 2, z: 3 }; let key = 'x'; console.log(obj.key);
let obj = { x: 1, y: 2, z: 3 };
let key = 'x';
console.log(obj[key]);

// Код должен вывести сумму элементов объекта: let obj = { x: 1, y: 2, z: 3 }; let sum = obj[x] + obj[y] + obj[x]; console.log(obj);
let obj = { x: 1, y: 2, z: 3 };
let sum = obj.x + obj.y + obj.z;
console.log(sum);

// Код должен вывести количество элементов объекта: let obj = { x: 1, y: 2, z: 3 }; console.log(obj.length);
let obj = { x: 1, y: 2, z: 3 };
console.log(Object.keys(obj).length);
