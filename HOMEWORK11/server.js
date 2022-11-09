//Task 1
// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині.
//  Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи,
//   тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу
//    директорію і назву файлу сервера (використати модуль path). 
const http = require("http");
const os = require('node:os');
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(`System information\n`);
    response.write(`Current user name: ${os.userInfo().username}\n`);
    response.write(`OS type: ${os.type} ${os.arch()}\n`);
    response.write(`System work time: ${(os.uptime()/60).toFixed(2)} minutes\n`);
    response.write(`Current work directory: ${__dirname}\n`);
    response.end(`Server file name: ${__filename}\n`);
  })
  .listen(8000);
console.log("Server running at http://127.0.0.1:5000/");


//Task 2
// Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного
//  юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. 
//  Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports.
// // Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну
//  сторінку: 

 

 

 