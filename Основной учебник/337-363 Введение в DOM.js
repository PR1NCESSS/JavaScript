"use strict";
// 339 Даны 3 абзаца: Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.
let elem1 = document.querySelector("#elem1");
console.log(elem1);
let elem2 = document.querySelector("#elem2");
console.log(elem2);
let elem3 = document.querySelector("#elem3");
console.log(elem3);

// 340 Получите ссылку на первый абзац из дива с id, равным block.
let block1 = document.querySelector("#block p");
console.log(block1);

// Получите ссылку на первый абзац из дива с классом block.
let block2 = document.querySelector(".block p");
console.log(block2);

// Получите ссылку на первый абзац с классом www.
let block3 = document.querySelector(".www");
console.log(block3);

// 341 Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.
let button1 = document.querySelector("#button1");
button1.addEventListener("click", function () {
  alert(1);
});
let button2 = document.querySelector("#button2");
button2.addEventListener("click", function () {
  alert(2);
});
let button3 = document.querySelector("#button3");
button3.addEventListener("click", function () {
  alert(3);
});

// 342 Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.
let buttn1 = document.querySelector("#buttn1");
buttn1.addEventListener("click", func1);
function func1() {
  console.log(1);
}
let buttn2 = document.querySelector("#buttn2");
buttn2.addEventListener("click", func2);
function func2() {
  console.log(2);
}

// 343 Дана следующая функция: Привяжите эту функцию ко всем 5-ти абзацам.
let element1 = document.querySelector("#element1");
element1.addEventListener("click", funct);
let element2 = document.querySelector("#element2");
element2.addEventListener("click", funct);
let element3 = document.querySelector("#element3");
element3.addEventListener("click", funct);
let element4 = document.querySelector("#element4");
element4.addEventListener("click", funct);
let element5 = document.querySelector("#element5");
element5.addEventListener("click", funct);
function funct() {
  console.log("message");
}

// 344 Даны следующие функции: Привяжите все эти функции к нашему абзацу.
let element = document.querySelector("#element");
element.addEventListener("click", functi1);
element.addEventListener("click", functi2);
element.addEventListener("click", functi3);
function functi1() {
  console.log("1");
}
function functi2() {
  console.log("2");
}
function functi3() {
  console.log("3");
}

// 345 Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.
let butn1 = document.querySelector("#butn1");
butn1.addEventListener("dblclick", function () {
  alert("Hello!");
});

// Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.
let butn2 = document.querySelector("#butn2");
butn2.addEventListener("mouseover", function () {
  alert("JavaScript");
});

// Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение.
let butn3 = document.querySelector("#butn3");
butn3.addEventListener("mouseout", function () {
  alert("O__o");
});

// Дана кнопка. По наведению на нее выведите одно сообщение, а по уходу с нее - другое.
let butn4 = document.querySelector("#butn4");
butn4.addEventListener("mouseover", function () {
  alert("Здравствуйте!");
});
butn4.addEventListener("mouseout", function () {
  alert("Уже уходите ?(");
});

// 346 Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
let text1 = document.querySelector("#text1");
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function () {
  console.log(text1.textContent);
});

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
let text2 = document.querySelector("#text2");
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
  text2.textContent = "Здесь измененный текст";
});

// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
let text3_1 = document.querySelector("#text3_1");
let text3_2 = document.querySelector("#text3_2");
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {
  alert(Number(text3_1.textContent) + Number(text3_2.textContent));
});

// Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.
let text4_1 = document.querySelector("#text4_1");
let text4_2 = document.querySelector("#text4_2");
let text4_3 = document.querySelector("#text4_3");
let res4 = document.querySelector("#res4");
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function () {
  let sum =
    Number(text4_1.textContent) +
    Number(text4_2.textContent) +
    Number(text4_3.textContent);
  res4.textContent = sum;
});

// Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
let text5 = document.querySelector("#text5");
let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function () {
  let num = Number(text5.textContent);
  num++;
  text5.textContent = num;
});

// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.
let text6 = document.querySelector("#text6");
let btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function () {
  text6.textContent = text6.textContent + "!";
});

// 347 Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.
let texxt1 = document.querySelector("#texxt1");
let buutn1 = document.querySelector("#buutn1");
buutn1.addEventListener("click", function () {
  console.log(texxt1.innerHTML);
});

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.
let texxt2 = document.querySelector("#texxt2");
let buutn2 = document.querySelector("#buutn2");
buutn2.addEventListener("click", function () {
  texxt2.innerHTML = "<b>bbbbbb</b>";
});

// 348 Дан инпут. Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.
let email = document.querySelector("#email");
let butns = document.querySelector("#butns");
butns.addEventListener("click", function () {
  alert(email.type);
});

// Дан инпут. Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.
let email2 = document.querySelector("#email2");
let butns2 = document.querySelector("#butns2");
butns2.addEventListener("click", function () {
  email2.type = "submit";
});

// Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.
let link = document.querySelector("#link");
let text_link = document.querySelector("#text_link");
let butns3 = document.querySelector("#butns3");
butns3.addEventListener("click", function () {
  text_link.textContent = link.href;
});

// Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.
let link2 = document.querySelector("#link2");
let butns4 = document.querySelector("#butns4");
butns4.addEventListener("click", function () {
  link2.textContent += ` (${link2.href})`;
});

// Пусть у вас есть картинка. Разместите ее на странице с помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
let image = document.querySelector("#image");
let res = document.querySelector("#res");
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  res.textContent = image.src;
});

// Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.
let image2 = document.querySelector("#image2");
let image_btn2 = document.querySelector("#image_btn2");
image_btn2.addEventListener("click", function () {
  image2.width = 300;
});

// Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.
let image3 = document.querySelector("#image3");
let image_btn3 = document.querySelector("#image_btn3");
image_btn3.addEventListener("click", function () {
  image3.width = image3.width * 2;
});

// Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.
let image4_1 = document.querySelector("#image4_1");
let image4_2 = document.querySelector("#image4_2");
let image_btn4_1 = document.querySelector("#image_btn4_1");
let image_btn4_2 = document.querySelector("#image_btn4_2");
image_btn4_1.addEventListener("click", function () {
  image4_1.src = "qwertyui";
});
image_btn4_2.addEventListener("click", function () {
  image4_2.src = "zxcvbnnm";
});

// 349 Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
let btn_val = document.querySelector("#btn_val");
let btn_sub = document.querySelector("#btn_sub");
btn_sub.addEventListener("click", function () {
  btn_val.value = "JavaScript";
});

// Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.
let btn_value = document.querySelector("#btn_value");
let btn_submit = document.querySelector("#btn_submit");
let btn_text = document.querySelector("#btn_text");
btn_submit.addEventListener("click", function () {
  btn_text.textContent = btn_value.value;
});

// Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.
let btn_sum = document.querySelector("#btn_sum");
let numberInput = document.querySelector("#numberInput");
let resultInput = document.querySelector("#resultInput");
btn_sum.addEventListener("click", function () {
  let square = numberInput.value * numberInput.value;
  resultInput.value = square;
});

// Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.
let btnDig = document.querySelector("#btnDig");
let resInput1 = document.querySelector("#resInput1");
let resInput2 = document.querySelector("#resInput2");
btnDig.addEventListener("click", function () {
  let temp = resInput1.value;
  resInput1.value = resInput2.value;
  resInput2.value = temp;
});

// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.
let Input1 = document.querySelector("#Input1");
let Input2 = document.querySelector("#Input2");
let Input3 = document.querySelector("#Input3");
let Input4 = document.querySelector("#Input4");
let Input5 = document.querySelector("#Input5");
let res_average = document.querySelector("#res_average");
let btn_average = document.querySelector("#btn_average");
btn_average.addEventListener("click", function () {
  res_average.textContent =
    (+Input1.value +
      +Input2.value +
      +Input3.value +
      +Input4.value +
      +Input5.value) /
    5;
});

// 350 Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.
let elements = document.querySelector("#elements");
elements.addEventListener("focus", f1);
elements.addEventListener("blur", f2);
function f1() {
  console.log((elements.value = 1));
}
function f2() {
  console.log((elements.value = 2));
}

// Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.
let elements2 = document.querySelector("#elements2");
elements2.addEventListener("focus", function () {
  elements2.value = 15;
});
elements2.addEventListener("blur", function () {
  alert(elements2.value * elements2.value);
});

// Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.
let elements3 = document.querySelector("#elements3");
elements3.addEventListener("focus", function () {
  elements3.value = "";
});

// 351 Дан див: Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
let el = document.querySelector("#el");
let btn_el = document.querySelector("#btn_el");
btn_el.addEventListener("click", function () {
  alert(el.className);
});

// Дан див: Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
let el2 = document.querySelector("#el2");
let btn_el2 = document.querySelector("#btn_el2");
btn_el2.addEventListener("click", function () {
  el2.className = "content";
});

// Дан див с несколькими CSS классами, записанными через пробел: Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.
let el3 = document.querySelector("#el3");
let btn_el3 = document.querySelector("#btn_el3");
btn_el3.addEventListener("click", function () {
  let arr = el3.className.split(" ");
  alert("[" + arr + "]");
});

// 352 Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.
console.log(document.querySelector("#image2").src);

// 353 Дан следующий код: Укажите на недостатки данного кода. Исправьте их.
let image3_1 = document.querySelector("#image3_1");
console.log(image3_1.src);
console.log(image3_1.width);
console.log(image3_1.height);

// 354 Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.
let my_input = document.querySelector("#my_input");
my_input.addEventListener("focus", function () {
  this.value = 1;
});
my_input.addEventListener("blur", function () {
  this.value = 2;
});

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
let my_input2 = document.querySelector("#my_input2");
my_input2.addEventListener("click", function () {
  this.value++;
});

// 355 Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.
let paragraphs2 = document.querySelectorAll(".parag");
paragraphs2.forEach((paragraph) => {
  paragraph.addEventListener("click", function () {
    this.textContent += "!";
  });
});

// Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.
let inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {
  input.addEventListener("blur", function () {
    this.value *= this.value;
  });
});

// 356 Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите их циклом и установите текст каждого абзаца в значение 'text'.
let changeTextButton = document.querySelector("#changeTextButton");
changeTextButton.addEventListener("click", function () {
  let paragraphs = document.querySelectorAll(".parag2");
  for (let paragraph of paragraphs) {
    paragraph.textContent = "text";
  }
});

// Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.
let paragraphs3 = document.querySelectorAll(".parag3");
let numButton = document.querySelector("#numButton");
numButton.addEventListener("click", function () {
  paragraphs3.forEach((par, index) => {
    par.textContent += `(${index + 1})`;
  });
});

// Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.
let inp = document.querySelectorAll("#inp");
let sumButton = document.querySelector("#sumButton");
let para = document.querySelector("#resul");
sumButton.addEventListener("click", function () {
  let sum = 0;
  inp.forEach((inp) => {
    sum += Number(inp.value);
  });
  para.textContent = sum;
});

// 357 Дана следующая функция: Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.
let inpyts = document.querySelectorAll(".inps");
for (let inpyt of inpyts) {
  inpyt.addEventListener("blur", func1);
}
function func1() {
  this.value = Number(this.value) + 1;
}

// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.
let nums = document.querySelectorAll("#num");
for (let num of nums) {
  num.addEventListener("click", func2);
}
function func2() {
  let numVal = Number(this.textContent);
  this.textContent = numVal * numVal;
}

// 358 Сделайте функцию-обработчик анонимной.
let divs = document.querySelectorAll(".div");
for (let div of divs) {
  div.addEventListener("click", function () {
    this.textContent++;
  });
}

// 359 Дана ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
let linkk = document.querySelector("#linkk");
let btn_link = document.querySelector("#btn_link");
btn_link.addEventListener("click", funcc3);

function funcc3() {
  linkk.textContent = linkk.textContent + `(${linkk.href})`;
  btn_link.removeEventListener("click", funcc3);
}

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.
let btn_num = document.querySelector("#btn_num");
btn_num.addEventListener("click", funct1);
function funct1() {
  this.value++;
  if (this.value == 10) {
    btn_num.removeEventListener("click", funct1);
  }
}

// 360 Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
let pp = document.querySelectorAll(".pp");
for (let prg of pp) {
  prg.addEventListener("click", funct4);
}

function funct4() {
  this.textContent = this.textContent + "!";
  this.removeEventListener("click", funct4);
}

// 361 Дан список ul, в каждом пункте которого записано число. Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу.
let listItems = document.querySelectorAll("#num_list li");
for (let listItem of listItems) {
  listItem.addEventListener("click", funct5);
}
function funct5() {
  this.textContent++;
}

// Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только по первому нажатию на нее.
let listItems2 = document.querySelectorAll("#num_list2 li");
for (let listItem2 of listItems2) {
  listItem2.addEventListener("click", functt6);
}
function functt6() {
  this.textContent++;
  this.removeEventListener("click", functt6);
}

// Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только если ее значение меньше 10.
let listItems3 = document.querySelectorAll("#num_list3 li");
for (let listItem3 of listItems3) {
  listItem3.addEventListener("click", functt7);
}
function functt7() {
  if (this.textContent < 10) {
    this.textContent++;
  }
}
