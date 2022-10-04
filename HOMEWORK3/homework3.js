/*
//Task 1
const arr = [2, 3, 4, 5];
let arrSum = 0;
for (let i = 0; i < arr.length; i+=1) {
    arrSum = arrSum + arr[i];
}
console.log(arrSum);

let i = 0;
while (i < arr.length) {
       arrSum = arrSum + arr[i];
       i += 1;
      }
console.log(arrSum);
 

// Task 2.
for (let i = 0; i < 15; i+=1) {
    if (i %2 === 0){
        console.log(`${i} is even`);
    }else {
        console.log(`${i} is odd`);
    };
};

//Task 3.
function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i+=1) {
        arr.push(Math.floor(Math.random() * 500) + 1);
    }
    console.log(arr);
};
console.log(randArray(5));



//Task 4
function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)){
        console.log(`Output is ${Math.pow(a, b)}`);
    }else {
        console.log(`Incorrect value for a function. Enter the integer only,pls!`);
    }       
};
raiseToDegree(parseInt(prompt(`Enter 1st value: `)), parseInt(prompt(`Enter 2nd value: `)));

//Task 5
function findMin(){
    console.log(Math.min(...arguments));
}

findMin(12, 14, 4, -4, 0.2);


//Task 6
function findUnique(arr) {
  //arr = [1, 2, 1, 3, 4, 3, 5];
  let unique = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i !== j) {    
        if (arr[i] === arr[j]) {
              unique = true;
              break;
        }
      }
    }
    if (unique) {
      break;
    }
  }
    console.log(`The array is unique? => ${!unique}`);
};

findUnique([1, 2, 3, 5, 3]);
findUnique([1, 2, 3, 5, 11]);


//Task 7
function lastElem(arr, qElem) {
  if (qElem === undefined) {
    qElem = 1;
  };
    return arr.slice(-qElem);
  };

console.log(lastElem([3, 4, 10, -5]));      // -5 
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5] 
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5] 


//Task 8
function capitalizator (inputString) {
    let words = inputString.split(" ");
    for (let i = 0; i < words.length; i+=1) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let output = words.join(" ");
    console.log(output);
};
capitalizator('i love java script');
*/