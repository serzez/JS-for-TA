/*
//Task 1
let openTab = window.open("", "blank", "width=300,height=300");
setTimeout(function() {
  openTab.resizeTo(500,500);
}, 2000);
setTimeout(function() {
  openTab.moveTo(200,200);
}, 4000);
setTimeout(function() {
  openTab.close();
}, 6000);

//Task 2
function changeCSS(){
  document.getElementById("text").style.color = "orange";
  document.getElementById("text").style.fontSize = "20px";
  document.getElementById("text").style.fontFamily = "Comic Sans MS";
}

//Task 3
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let hlink = document.querySelector("#testlink");

function changeBgndBlue(){
  document.body.style.backgroundColor ="blue";
}
function changeBgndPink(){
  document.body.style.backgroundColor ="pink";
}
function changeBgndBrwn(){
  document.body.style.backgroundColor ="brown";
}
function changeBgndWhite(){
  document.body.style.backgroundColor ="white";
}
function changeBgndYellow(){
  document.body.style.backgroundColor ="yellow";
}

button1.addEventListener("click", changeBgndBlue);
button2.addEventListener("dblclick", changeBgndPink);
button3.addEventListener("keydown", changeBgndBrwn);
button3.addEventListener("keyup", changeBgndWhite);
hlink.addEventListener("mouseenter", changeBgndYellow);
hlink.addEventListener("mouseleave", changeBgndWhite);

//Task 4
function deleteElement() {
  let drpdwnlist = document.querySelector(`#userslist`);
  drpdwnlist.remove(drpdwnlist.selectedIndex);
  
}

//Task 5
let liveButton = document.querySelector("#livebutton");
let messageNode = document.getElementById("message")

function iWasPressed(){
  messageNode.prepend(document.createTextNode("I was pressed!"));
  messageNode.prepend(document.createElement('br'));
}

function mouseOnMe(){
  messageNode.prepend(document.createTextNode("Mouse on me!"));
  messageNode.prepend(document.createElement('br'));
}

function mouseOutside(){
  messageNode.prepend(document.createTextNode("Mouse is not on me!"));
  messageNode.prepend(document.createElement('br'));
}

liveButton.addEventListener("click", iWasPressed);
liveButton.addEventListener("mouseenter", mouseOnMe);
liveButton.addEventListener("mouseleave", mouseOutside);

//Task 6
const height = document.querySelector('#height');
const width = document.querySelector('#width');

function windowSize() {
  height.textContent = window.innerHeight;
  width.textContent = window.innerWidth;
}

window.addEventListener('resize', windowSize);


//Task 7
На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн,
 у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого
 випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї
країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести
 назву обраної країни і місто.
*/

// in progress