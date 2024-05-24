// 392 Дан див: <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div> Переберите циклом все узлы этого дива и выведите их в консоль.
let elem = document.querySelector('#elem');
for (node of elem.childNodes){
  console.log(node);
}

// 393 Дан див: <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div> Переберите циклом все узлы этого дива и выведите в консоль их названия.
let elem = document.querySelector('#elem');
for (let node of elem.childNodes){
  console.log(node.nodeName);
}

// 394 Дан див: <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div> Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы.
let elem = document.querySelector('#elem');
for (let node of elem.childNodes){
  if (node.nodeType === 1 || node.nodeType === 3){
    console.log(node.nodeName);
  }
}

// 395 Дан див: <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div> Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов.
let elem = document.querySelector('#elem');
for (let node of elem.childNodes){
  console.log(node.textContent);
}

// Дан див: <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div> Переберите циклом все узлы этого дива и выведите в консоль тексты всех комментариев и текстовых узлов.
let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
  if (node.nodeType === 8 || node.nodeType === 3) {
    console.log(node.textContent);
  }
}

// Дан див: <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div> Переберите циклом все узлы этого дива и выведите в консоль тексты текстовых узлов и элементов.
let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
  if (node.nodeType === 1 || node.nodeType === 3) {
    console.log(node.textContent);
  }
}

// Дан див: <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div> Переберите циклом все узлы этого дива и каждому узлу в конец запишите его тип.
let elem = document.querySelector('#elem');
for (let node of elem.childNodes){
  node.textContent += `-${node.nodeType}`;
  console.log(node.textContent);
}


