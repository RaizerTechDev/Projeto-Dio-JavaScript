/*
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
currentNumber = currentNumber + 1;
currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
currentNumber = currentNumber - 1;
currentNumberWrapper.innerHTML = currentNumber;
}
*/

/*Eventos*/
function increment() {
  alert("Adicionar");
}
function addEventos1() {
  document
    .getElementById("adicionar-color")
    .addEventListener("click", increment);
}
window.addEventListener("load", addEventos1);

function decrement() {
  alert("Subtrair");
}

function addEventos2() {
  document
    .getElementById("subtrair-color")
    .addEventListener("click", decrement);
}
window.addEventListener("load", addEventos2);

/* Laços de Repetição */

// Exiba na tela 10 números de 0 a 10;
let c = 0;

// while(c < 10) { do 0 a 9 por ser menor que 10
while (c <= 10) {
  // do 0 a 10
  // console.log(c);

  //incremento com do 1 a 10
  c += 1;
}

c = 1;
do {
  //  console.log(c); // imprime do 1 a 10 repetindo o laço
  c += 1;
} while (c <= 10);

let novoNum = 10;

while (novoNum >= 0) {
  console.log(novoNum); // imprime do 10 a 0 repetidamente
  novoNum -= 1;
}

// for do 1 a 10

for (let cont = 1; cont <= 10; cont++) {
  // console.log(cont); //imprime do 1 a 10 repetidamente o laço
}
