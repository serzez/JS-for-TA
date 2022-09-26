//Task 2
console.log("Avksentiev");

//Task 3
let variable1;
let variable2;

variable1 = 777;
variable2 = "hello";

console.log(variable1);
console.log(variable2);

variable1 = variable2;

console.log(variable1);
console.log(variable2);

//Task 4
const Student = {
    name: "John",
    id: 1,
    active: true,
    admin: undefined,
    hasCar: null,
};

console.log(Student);

//Task 5
let isAdult = confirm("Are you adult?");
console.log(isAdult);

//Task 6
const Person = {
    firstName: "John",
    lastName: "Doe",
    groupId: 604,
    year: 2000,
    married: undefined,
};

let areYouMarried = confirm("Are you married?");
Person.married = areYouMarried;

console.log(Person.year);
console.log(Person.groupId);
console.log(Person.married);
console.log(Person.firstName);
console.log(Person.lastName);

const hasCar = null;
const gender = undefined;

console.log(typeof hasCar);
console.log(typeof gender);

//Task 7
const username = prompt("Enter you login, pls:");
const email = prompt("Enter you email, pls:");
const password = prompt("Enter your password, pls:");
alert(`Dear ${username}, your email is ${email}, your password is ${password}`);

//Task 8
// Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці,
//  записує результати в відповідні змінні, і виводить їх значення на екран.

const userValue = prompt("Enter your value: ", 0);
const inHour = userValue * 3600;
const inDay = userValue * 3600 * 24;
const inMonth = userValue * 3600 * 24 * 31;

alert(`Based on your value, in ${userValue} hour(s): ${inHour} seconds, in ${userValue} day(s): ${inDay} seconds, in ${userValue} month(s): ${inMonth} seconds`);

