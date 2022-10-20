/*
//Task 1
document.getElementById("test").innerHTML = "Last";
document.querySelector("#test").innerHTML = "Last";


//Task 2
alert(document.getElementsByClassName("image").src = "cat.jpg");


//Task 3
let array = document.querySelectorAll("#text > p");
array.forEach((element, index) => {
    console.log(`${index+1} ${element.innerHTML}`);
});


//Task 4
alert(document.body.firstElementChild.firstElementChild.innerHTML);
alert(document.body.firstElementChild.lastElementChild.innerHTML);
alert(
  document.body.firstElementChild.firstElementChild.nextElementSibling.innerHTML
);
alert(
  document.body.firstElementChild.lastElementChild.previousElementSibling
    .innerHTML
);
alert(
  document.body.firstElementChild.lastElementChild.previousElementSibling
    .previousElementSibling.innerHTML
);

alert(document.querySelector("#list").children[0].innerHTML);
alert(document.querySelector("#list").children[4].innerHTML);
alert(document.querySelector("#list").children[1].innerHTML);
alert(document.querySelector("#list").children[3].innerHTML);
alert(document.querySelector("#list").children[2].innerHTML);

//Task 5
document.querySelector("h1").style.backgroundColor = "#a4e863";
document.getElementById("myDiv").children[0].style.fontWeight = "bold";
document.getElementById("myDiv").children[1].style.color = "red";
document.getElementById("myDiv").children[2].style.textDecoration = "underline";
document.getElementById("myDiv").children[3].style.fontStyle = "italic";
document.querySelector("span").style.visibility = "hidden";

let unList = document.getElementById("myList");
let horizString = unList.children[0].innerHTML+unList.children[1].innerHTML+unList.children[2].innerHTML;
document.getElementById("myList").innerHTML = horizString;


//Task 6
let firstInput = prompt("Please enter your name", "");
let secondInput = prompt("Please enter your password", "");
document.getElementById("input1").value = firstInput;
document.getElementById("input2").value = secondInput;

let tempInput = firstInput;
firstInput = secondInput;
secondInput = tempInput;

document.getElementById("input1").value = firstInput;
document.getElementById("input2").value = secondInput;

//Task 7
<body> 
  <main class="mainClass check item">   
        <div id="myDiv"> 
           <p>First paragraph</p>            
         </div> 
       </main>  
    </body> 
*/
const main = document.createElement("main");
main.className = "mainClass check item";
let newDiv = document.createElement("div");
newDiv.id = "myDiv";
main.prepend(newDiv)
let firstParagraph = document.createElement("p");
firstParagraph.innerHTML = "First paragraph";
newDiv.prepend(firstParagraph);
console.log(main);