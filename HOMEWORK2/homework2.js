//Task 1
let x = 1; 
let y = 2; 

let res1 = "" + x + y;     // Допишіть код, необхідно використовувати змінні x і y 
console.log(res1); // "12" 
console.log(typeof res1); // "string" 

let res2 = `${Boolean(x)}` + y;// Допишіть код, необхідно використовувати змінні x і y 
console.log(res2); // "true2" 
console.log(typeof res2); // "string" 

let res3 = Boolean(y-x);// Допишіть код, необхідно використовувати змінні x і y 
console.log(res3); // true 
console.log(typeof res3); // "boolean" 

let res4 = (y-y) / (x-x);// Допишіть код, необхідно використовувати змінні x і y 
console.log(res4); // NaN 
console.log(typeof res4); // "number"


//Task 2
let userInput = prompt("Enter a number: ");
if (userInput % 2 == 0 && userInput > 0) {
    console.log("Your number is even positive");
}else if(userInput % 7 == 0){
    console.log("Your number is multiple of 7");
}else {
    console.log(`You enter ${userInput}`);
};


//Task 3
let emptyArray = new Array();

emptyArray.unshift(7);
emptyArray[1] = "Row";
emptyArray[2] = true;
emptyArray[3] = null;
console.log(emptyArray.length);
emptyArray[4] = prompt("Enter your value: ");
console.log(emptyArray[4]);
emptyArray.shift();
console.log(emptyArray);


//Task 4
let cities = ["Rome", "Lviv", "Warsaw"];
let oneRow = "";
for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    oneRow = oneRow + cities[i];
    if(i < cities.length - 1) {
        oneRow = oneRow + '*';
    };
};
console.log(oneRow);


//Task 5
let isAdult = prompt("Are you adult? Enter your age: ");
if (isAdult >= 18) {
    alert("You are mature!");
} else {
    alert("You are TOO YOUNG!");
};


//Task 6
let a = parseFloat(prompt("Enter 1st side of the triangle: "));
let b = parseFloat(prompt("Enter 2nd side of the triangle: "));
let c = parseFloat(prompt("Enter 3rd side of the triangle: "));

if (a < 0 || b < 0 || c < 0) {
  console.log("Incorrect data");
} else {
  let hp = (a + b + c) / 2;
  let triangleSquare = Math.sqrt(hp * (hp - a) * (hp - b) * (hp - c));
  console.log(`Square of your triangle is: ${triangleSquare.toFixed(3)}`);
  if (
    a ** 2 == b ** 2 + c ** 2 ||
    b ** 2 == a ** 2 + c ** 2 ||
    c ** 2 == a ** 2 + b ** 2
  ) {
    console.log("The triangle is right");
  } else {
    console.log("The triangle is NOT right");
  };
};

//Task 7
let currentDate = new Date();
let currentTime = currentDate.getHours();
console.log(currentTime);

if (currentTime >= 24 && currentTime < 5) {
    alert("Доброї ночі");
}else if (currentTime >= 5 && currentTime < 11) {
    alert("Доброго ранку");
}else if (currentTime >= 11 && currentTime < 17) {
    alert("Доброго дня");
}else if (currentTime >= 17 && currentTime < 23) {
    alert("Доброго вечора");
};

switch (currentTime != null) {
case (currentTime >= 24 && currentTime < 5):
    alert("Доброї ночі");
case (currentTime >= 5 && currentTime < 11):
    alert("Доброго ранку");
case (currentTime >= 11 && currentTime < 17):
    alert("Доброго дня");
case (currentTime >= 17 && currentTime < 23):
    alert("Доброго вечора");
};