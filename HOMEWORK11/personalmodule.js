//Task2
const currentDate = new Date();
module.exports.date = currentDate;

module.exports.showMessage = function (name) {
    let currentTime = currentDate.getHours();

    switch (true) {
        case (currentTime >= 23 && currentTime < 5):
            return `Good night, ${name}!`;
        case (currentTime >= 5 && currentTime < 11):
            return `Good morning, ${name}!`;
        case (currentTime >= 11 && currentTime < 17):
            return `Good afternoon, ${name}!`;
        case (currentTime >= 17 && currentTime < 23):
            return `Good evening, ${name}!`;
    }
}