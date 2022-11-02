/*
//Task 1
function upperCase(exp){
  if (/^[A-Z]/.test(exp)) {
    return 'String starts with upper case character';
  } else {
    return 'String does not start with upper case character';
  }
}
console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));


//Task 2
function checkEmail(email) {
    let emailValidationRegExp = /\w+@\w+\.\w{2,4}$/gi;
    let result = emailValidationRegExp.test(email);
    return result;
}
console.log(checkEmail("Qmail2@gmailco"));
console.log(checkEmail("Qmail2@gmail.c"));
console.log(checkEmail("Qmail2gmail.com"));
console.log(checkEmail("Qmail2@gmail.co"));
console.log(checkEmail("Qmail2@gmail.coma"));
console.log(checkEmail("Qmail2@gmail.comaa"));


//Task 3
function expression (exp) {
  let regExp = /d(b+)(d)/i;
  let result = exp.match(regExp);
  return result;
}
console.log(expression("cdbBdbsbz"));


//Task 4
function replaceWords (exp) {
  let regExp = /(\w+)\s(\w+)/;
  let result = exp.replace(regExp, '$2, $1');
  return result;
}
console.log(replaceWords("Java Script"));


//Task 5
function ccValidation (card) {
  let regExp = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;
  let result = regExp.test(card);
  return result;
}
console.log(ccValidation("9999-9999-9999-9999"));
console.log(ccValidation("9999999999999999"));


//Task 6
function checkEmail (email) {
  let regExp = /^[A-Za-z0-9]+([_]?\w+)+([-]?\w+)+[@]\w+[.]\w{2,4}$/;
  let result = regExp.test(email);
  if (result) {
    console.log("Email is correct!");
  }else{
    console.log("Email is NOT correct!");
  }
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');


//Task 7
Напишіть функцію, яка перевіряє правильність логіна. Правильний логін 
- рядок від 2 до 10 символів, що містить лише букви та числа, номер не може 
бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку,
 включаючи числа з плаваючою комою (наприклад, 3.4). 
Приклад роботи: 
checkLogin('ee1.1ret3'); 
true  
1.1, 3 
checkLogin('ee1*1ret3'); 
false  
1, 1, 3
*/
function checkLogin (login) {
  let regExp = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
  let regExpNumbers = /[\d\.]+/g;
  let result = regExp.test(login);
  let numbers = login.match(regExpNumbers);
  console.log(`${result} ${numbers}`);

}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
checkLogin('ee1asda1ret3');
checkLogin('1e1asda1ret3');