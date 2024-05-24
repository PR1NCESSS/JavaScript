/* 168 Дан следующий массив:
let arr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
];
Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'. */
let arr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
];
console.log(arr[3][2] + arr[1][1] + arr[2][0] + arr[0][0]);

// Дан следующий массив: let arr = [[1, 2], [3, 4], [5, 6]]; Обращаясь к каждому элементу массива найдите сумму всех его элементов.
let arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;
for (elems of arr) {
  for (elem of elems) {
    sum += elem;
  }
}
console.log(sum);

// Обращаясь к каждому элементу массива найдите сумму всех его элементов.
let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log(
  arr[0][0][0] +
  arr[0][0][1] +
  arr[0][1][0] +
  arr[0][1][1] +
  arr[1][0][0] +
  arr[1][0][1] +
  arr[1][1][0] +
  arr[1][1][1]
);

// Произвольные массивы в JavaScript:
// Вручную, без цикла, найдите сумму элементов этого массива.
let arr = [
  [1, 2, 3, [4, 5, [6, 7]]],
  [8, [9, 10]],
];
console.log(
  arr[0][0] +
  arr[0][1] +
  arr[0][2] +
  arr[0][3][0] +
  arr[0][3][1] +
  arr[0][3][2][0] +
  arr[0][3][2][1] +
  arr[1][0] +
  arr[1][1][0] +
  arr[1][1][1]
);

// Перебор многомерных массивов в JavaScript:
// №1 Дан двухмерный массив с числами: С помощью вложенных циклов найдите сумму элементов этого массива.
let arr = [[1, 2, 3], [4, 5], [6]];
let totalSum = 0;
for (let subArr of arr) {
  for (let num of subArr) {
    totalSum += num;
  }
}
console.log(totalSum);

// №2 Дан трехмерный массив с числами: С помощью вложенных циклов найдите сумму элементов этого массива.
let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let totalSum = 0;
for (let subArr of arr) {
  for (let elem of subArr) {
    for (let num of elem) {
      totalSum += num;
    }
  }
}
console.log(totalSum);

// Заполнение многомерных массивов JavaScript:
// №1 Сформируйте с помощью двух вложенных циклов следующий массив:
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 5; j++) {
    arr[i].push(j + 1);
  }
}
console.log(arr);

// №2 Сформируйте с помощью двух вложенных циклов следующий массив:
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 4; j++) {
    arr[i].push("x");
  }
}
console.log(arr);

// №3 Сформируйте с помощью трех вложенных циклов следующий массив:
let arr = [];
for (let i = 0; i < 3; i++) {
  let subArr1 = [];
  for (let j = 0; j < 2; j++) {
    let subArr2 = [];
    for (let k = 0; k < 5; k++) {
      subArr2.push(k + 1);
    }
    subArr1.push(subArr2);
  }
  arr.push(subArr1);
}
console.log(arr);

// Проблемы при заполнении многомерных массивов в JavaScript:
// №1 Автор следующего кода хотел сделать двухмерный массив: Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}
console.log(arr);

// №2 Автор следующего кода хотел сделать двухмерный массив: Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}
console.log(arr);

// №3 Автор следующего кода хотел сделать двухмерный массив: Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}
console.log(arr);

// №4 Автор следующего кода хотел сделать двухмерный массив: Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}
console.log(arr);

// №5 Автор следующего кода хотел сделать двухмерный массив: Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}
console.log(arr);

// №6 Автор следующего кода хотел сделать двухмерный массив: Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}
console.log(arr);

// Заполнение многомерных массивов по порядку в JavaScript:
// №1 Сформируйте с помощью двух вложенных циклов следующий массив:
let arr = [];
for (let i = 0, k = 1; i < 4; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i].push(k++);
  }
}
console.log(arr);

// №2 Сформируйте с помощью двух вложенных циклов следующий массив:
let arr = [];
let k = 0;
for (let i = 0; i < 4; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    k += 2;
    arr[i].push(k);
  }
}
console.log(arr);

// №3 Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
let arr = [];
let counter = 1;
for (let i = 0; i < 2; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i][j] = [];
    for (let k = 0; k < 2; k++) {
      arr[i][j][k] = counter;
      counter++;
    }
  }
}
console.log(arr);

// №4 Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}
console.log(arr);

// №5 Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}
console.log(arr);

// №6 Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}
console.log(arr);

// №7 Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}
console.log(arr);

// №8 Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}
console.log(arr);

// №9 Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}
console.log(arr);

// №10 Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}
console.log(arr);

// №11 Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}
console.log(arr);

// №12 Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}
console.log(arr);

// №13 Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}
console.log(arr);

// Многомерные объекты в JavaScript:
// №1 Найдите сумму элементов приведенного объекта.
let obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};
console.log(
  obj["key1"].key1 +
  obj["key1"].key2 +
  obj["key1"].key3 +
  obj["key2"].key1 +
  obj["key2"].key2 +
  obj["key2"].key3 +
  obj["key3"].key1 +
  obj["key3"].key2 +
  obj["key3"].key3
);

// №2 Выведите на экран элемент 'b2' и элемент 'c1'.
let obj = {
  1: {
    1: "a1",
    2: "a2",
    3: "a3",
  },
  2: {
    1: "b1",
    2: "b2",
    3: "b3",
  },
  3: {
    1: "c1",
    2: "c2",
    3: "c3",
  },
};
alert(obj[2][2]);
alert(obj[3][1]);

// №3 Вручную, без цикла, найдите сумму всех элементов-чисел.
let obj = {
  key1: {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4,
    },
    f: 5,
  },
  key2: {
    g: 6,
    h: 7,
  },
};
console.log(
  obj["key1"]["a"] +
  obj["key1"]["b"] +
  obj["key1"]["c"]["d"] +
  obj["key1"]["c"]["e"] +
  obj["key1"]["f"] +
  obj["key2"]["g"] +
  obj["key2"]["h"]
);

// Перебор многомерных объектов в JavaScript:
// №1 Используя циклы, найдите сумму элементов этого объекта.
let obj = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
};

let sum = 0;
for (let key in obj) {
  for (let innerKey in obj[key]) {
    sum += obj[key][innerKey];
  }
}
console.log(sum);

// №2 Используя циклы, найдите сумму элементов этого объекта.
let obj = {
  1: {
    1: {
      1: 111,
      2: 112,
      3: 113,
    },
    2: {
      1: 121,
      2: 122,
      3: 123,
    },
  },
  2: {
    1: {
      1: 211,
      2: 212,
      3: 213,
    },
    2: {
      1: 221,
      2: 222,
      3: 223,
    },
  },
  3: {
    1: {
      1: 311,
      2: 312,
      3: 313,
    },
    2: {
      1: 321,
      2: 322,
      3: 323,
    },
  },
};

let sum = 0;
for (let key1 in obj) {
  for (let key2 in obj[key1]) {
    for (let key3 in obj[key1][key2]) {
      sum += obj[key1][key2][key3];
    }
  }
}
console.log(sum);

// Многомерные структуры в JavaScript:
// Выведите на экран первого студента из третьей группы.
let students = {
  group1: ["name11", "name12", "name13"],
  group2: ["name21", "name22", "name23"],
  group3: ["name31", "name32", "name33"],
};
alert(students["group3"][0]);

// Перебор многомерных структур JavaScript:
// №1 С помощью вложенных циклов выведите на экран все строки с данными.
let data = {
  1: ["data11", "data12", "data13"],
  2: ["data21", "data22", "data23"],
  3: ["data31", "data32", "data33"],
  4: ["data41", "data42", "data43"],
};

for (let group in data) {
  for (let dates of data[group]) {
    console.log(dates);
  }
}

// №2 С помощью вложенных циклов выведите на экран все строки с данными.
let data = [
  {
    1: "data11",
    2: "data12",
    3: "data13",
  },
  {
    1: "data21",
    2: "data22",
    3: "data33",
  },
  {
    1: "data31",
    2: "data32",
    3: "data33",
  },
];

for (let group of data) {
  for (let name in group) {
    console.log(group[name]);
  }
}

// №3 С помощью вложенных циклов выведите на экран все строки с данными.
let data = [
  {
    1: ["data111", "data112", "data113"],
    2: ["data121", "data122", "data123"],
  },
  {
    1: ["data211", "data212", "data213"],
    2: ["data221", "data222", "data223"],
  },
  {
    1: ["data411", "data412", "data413"],
    2: ["data421", "data422", "data423"],
  },
];

for (let group of data) {
  for (let name in group) {
    for (let key of group[name]) {
      console.log(key);
    }
  }
}

// Массив объектов в JavaScript:
// №1 Выведите на экран данные каждого работника в формате имя - зарплата.
let employees = [
  {
    name: 'name1',
    salary: 300,
  },
  {
    name: 'name2',
    salary: 400,
  },
  {
    name: 'name3',
    salary: 500,
  },
];
for (let employee of employees) {
  console.log(employee.name + ' - ' + employee.salary);
}

// №2 Выведите на экран сумму зарплат всех работников.
let employees = [
  {
    name: 'name1',
    salary: 300,
  },
  {
    name: 'name2',
    salary: 400,
  },
  {
    name: 'name3',
    salary: 500,
  },
];
let totalSalary = 0;
for (let employee of employees) {
  totalSalary += employee.salary;
}
console.log(totalSalary);

// №3 Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
let employees = [
  {
    name: 'name1',
    salary: 300,
    age: 28,
  },
  {
    name: 'name2',
    salary: 400,
    age: 29,
  },
  {
    name: 'name3',
    salary: 500,
    age: 30,
  },
  {
    name: 'name4',
    salary: 600,
    age: 31,
  },
  {
    name: 'name5',
    salary: 700,
    age: 32,
  },
];
let sal = 0;
for (let emplo of employees) {
  if (emplo.age >= 30) {
    sal += emplo.salary;
  }
}
console.log(sal);

// Ключи из переменных в многомерных структурах JavaScript: 
// №1 Выведите на экран название месяца, соответствующее значениям переменных lang и month.
let months = {
  'ru': [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ],
  'en': [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ],
};
let lang = 'ru';
let month = 5;
console.log(months[lang][month]);

// №2 Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.
let affairs = {
  '2018': {
    11: {
      29: ['дело111', 'дело112', 'дело113'],
      30: ['дело121', 'дело122', 'дело123'],
    },
    12: {
      30: ['дело211', 'дело212', 'дело213'],
      31: ['дело221', 'дело222', 'дело223'],
    },
  },
  '2019': {
    12: {
      29: ['дело311', 'дело312', 'дело313'],
      30: ['дело321', 'дело322', 'дело323'],
      31: ['дело331', 'дело332', 'дело333'],
    }
  },
}
let year = '2019';
let month = 12;
let day = 30;
console.log(affairs[year][month][day]);

// №3 Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.
let obj = {
  key1: {
    key2: '12',
    key3: '13',
  },
  key2: {
    key4: '24',
    key5: '25',
  },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

// №4 Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.
let obj = {
  key1: {
    key2: '12',
    key3: '13',
  },
  key2: {
    key4: '24',
    key5: '25',
  },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

// №5 Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.
let obj = {
  key1: {
    key2: '12',
    key3: '13',
  },
  key2: {
    key4: '24',
    key5: '25',
  },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

// №6 Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.
let obj = {
  key1: {
    key2: '12',
    key3: '13',
  },
  key2: {
    key4: '24',
    key5: '25',
  },
}

let key1 = 'key2';
console.log(obj[key1]['key4']);

// Добавление элементов в многомерные массивы JavaScript:
// №1 Добавьте в следующий массив еще одного работника:
let employees = [
  {
    name: 'name1',
    salary: 300,
    age: 28,
  },
  {
    name: 'name2',
    salary: 400,
    age: 29,
  },
  {
    name: 'name3',
    salary: 500,
    age: 30,
  },
];
employees.push({
  name: 'name4',
  salary: 600,
  age: 31,
});

// Добавление элементов в многомерные объекты JavaScript: 
// №1 Скопируйте себе следующую структуру для хранения списка дел за определенные даты:
let affairs = {
  '2019-12-28': ['data11', 'data12', 'data13'],
  '2019-12-29': ['data21', 'data22', 'data23'],
  '2019-12-30': ['data31', 'data32', 'data33'],
}

// №2 Добавьте еще одно дело в дату '2019-12-29'.
let affairs = {
  '2019-12-28': ['data11', 'data12', 'data13'],
  '2019-12-29': ['data21', 'data22', 'data23'],
  '2019-12-30': ['data31', 'data32', 'data33'],
};
affairs['2019-12-29'].push('data24');

// №3 Добавьте еще два дела в дату '2019-12-31'.
let affairs = {
  '2019-12-28': ['data11', 'data12', 'data13'],
  '2019-12-29': ['data21', 'data22', 'data23'],
  '2019-12-30': ['data31', 'data32', 'data33'],
};
affairs['2019-12-31'] = ['data41', 'data42'];

// №4 Скопируйте себе следующую структуру для хранения списка студентов:
let students = {
  'group1': {
    'subgroup11': ['student111', 'student112', 'student113'],
    'subgroup12': ['student121', 'student122', 'student123'],
  },
  'group2': {
    'subgroup21': ['student211', 'student212', 'student213'],
    'subgroup22': ['student221', 'student222', 'student223'],
  },
  'group3': {
    'subgroup31': ['student311', 'student312', 'student313'],
    'subgroup32': ['student321', 'student322', 'student323'],
  },
};

// №5 Добавьте нового студента в подгруппу 'subgroup11'.
let students = {
  'group1': {
    'subgroup11': ['student111', 'student112', 'student113'],
    'subgroup12': ['student121', 'student122', 'student123'],
  },
  'group2': {
    'subgroup21': ['student211', 'student212', 'student213'],
    'subgroup22': ['student221', 'student222', 'student223'],
  },
  'group3': {
    'subgroup31': ['student311', 'student312', 'student313'],
    'subgroup32': ['student321', 'student322', 'student323'],
  },
};
students.group1.subgroup11.push('student114');

// №6 Добавьте в первую группу еще одну подгруппу.
let students = {
  'group1': {
    'subgroup11': ['student111', 'student112', 'student113'],
    'subgroup12': ['student121', 'student122', 'student123'],
  },
  'group2': {
    'subgroup21': ['student211', 'student212', 'student213'],
    'subgroup22': ['student221', 'student222', 'student223'],
  },
  'group3': {
    'subgroup31': ['student311', 'student312', 'student313'],
    'subgroup32': ['student321', 'student322', 'student323'],
  },
};
students.group1['subgroup13'] = ['student131', 'student132'];

// №7 Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
let students = {
  'group1': {
    'subgroup11': ['student111', 'student112', 'student113'],
    'subgroup12': ['student121', 'student122', 'student123'],
  },
  'group2': {
    'subgroup21': ['student211', 'student212', 'student213'],
    'subgroup22': ['student221', 'student222', 'student223'],
  },
  'group3': {
    'subgroup31': ['student311', 'student312', 'student313'],
    'subgroup32': ['student321', 'student322', 'student323'],
  },
};
students['group4'] = {
  'subgroup41': ['student411', 'student421'],
};
