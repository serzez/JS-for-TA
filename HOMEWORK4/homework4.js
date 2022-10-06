/*//Task 1
function calcRectangleArea(width, height) {
  width = prompt("Enter a side: ");
  height = prompt("Enter b side: ");
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Invalid values of width or height");
  }
  return width * height;
};
 console.log(calcRectangleArea());


//Task 2
function checkAge() {
    let age = prompt("Enter your age: ");
    if (age === "") {
        throw new Error("The field is empty! Please enter your age");
    }else if (isNaN(age)) {
            throw new Error("Value is not a number");
    }else if (age < 14) {
        throw new Error("You are too young");
    };
    return access = true;
};

try {
    checkAge();
    console.log(`Access to the movie: ${access}`);
} catch (error) {
    console.log(error.stack);
};


//Task 3
class MonthException extends Error {
  name = "MonthException";
  constructor(message) {
    super(message);
  }

  showMonthName(month) {
    this.month = parseInt(month);
    if (
      this.month === "" ||
      isNaN(this.month) ||
      this.month < 1 ||
      this.month > 12
    ) {
      throw new MonthException(`Incorrect month number`);
    }
    const date = new Date();
    date.setMonth(month - 1);

    return date.toLocaleString("en-US", {
      month: "long",
    });
  }
}

try {
  let month = new MonthException();
  console.log(month.showMonthName(12));
  console.log(month.showMonthName(14));
  //console.log(month.showMonthName(''));
  //console.log(month.showMonthName('a'));
} catch (error) {
  console.log(error.name + ": " + error.message);
}


//Task 4

function showUser(id) {
  try {
    if (id < 0) {
      throw new Error("ID must not be negative: " + id);
    }
    let user = {
      ID: id,
    };
    return user;
  } catch (error) {
    console.log(error.name + ` ` + error.message);
  }
}

function showUsers(ids) {
  let users = [];
  for (let i = 0; i < ids.length; i += 1) {
    let user = showUser(ids[i]);
    if (user < 0) {
      continue;
    } else {
      users.push(user);
    }
  }
  console.log(users);
}

showUsers([7, -12, 44, 22]);
*/
