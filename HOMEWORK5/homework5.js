/* //Task 1
let mentor = {  
            course: "JS fundamental",  
            duration: 3, 
            direction: "web-development"  
        }; 

let employee = {
    firstName: "Peter",
    lastName: "Peterson",
    position: "developer",
    experience : 4
    };

function propsCount(currentObject) {
    return Object.entries(currentObject).length
};

console.log(propsCount(employee));
console.log(propsCount(mentor));

//Task 2
let employee = {
    id: 0123,
    firstName: "Peter",
    lastName: "Peterson",
    position: "developer",
    experience : 4
    };

function showProps(obj){
    return Object.keys(obj)
}

console.log(showProps(employee));
console.log(Object.values(employee));

// for(let prop of Object.keys(employee)){
//     let value = employee[prop];    
//     console.log(prop, value);
// }


//Task 3
class Person {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
        showFullName(){ {
            return (this.name + " " + this.surname);
        }
    
}
}

class Student extends Person {
    constructor(name, surname, year){
        super(name,surname);
        this.year = year;
    }
        showFullName(middleName) {
            super.showFullName();
            this.middleName = middleName;
            return (this.name + " " + this.middleName + " " + this.surname)
        }
        showCourse() {
            return new Date().getFullYear() - this.year + 1
        }    
}

let student = new Person("Sam", "Samuel");
console.log(student.showFullName());
let student2 = new Student("Sam2", "Samuel2", 2022);
console.log(student2.showFullName("Petrovych"));
console.log("Current course: " + student2.showCourse());

const stud1 = new Student("Petro", "Petrenko", 2015); 
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych 
console.log("Current course: " + stud1.showCourse()); //Current course: 6 


//Task 4.
const workerList = [];
class Worker {
  #experience = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    workerList.push(this);
  }
  showSalary() {
    console.log(this.dayRate * this.workingDays);
  }
  showSalaryWithExperience() {
    return this.dayRate * this.workingDays * this.#experience;
  }
  get showExp() {
    return this.#experience;
  }
  set setExp(exp) {
    this.#experience = exp;
  }

  sortSalaries(workersArray) {
    let sortedSalary = workersArray.sort(function (a, b) {
      return a.showSalaryWithExperience() - b.showSalaryWithExperience();
    });
    //console.log(sortedSalary);

    sortedSalary.forEach(showSortedElements);
    function showSortedElements(element) {
      console.log(element.fullName + ": " + element.showSalaryWithExperience());
    }
  }
};

let worker1 = new Worker("John Johnson", 20, 23); 
console.log(worker1.fullName);                  
worker1.showSalary(); 
console.log("Experience: " + worker1.showExp); 
console.log(worker1.showSalaryWithExperience()); 
worker1.setExp = 1.5; 
console.log("New experience: " + worker1.showExp); 
worker1.showSalaryWithExperience();  

let worker2 = new Worker("Tom Tomson", 48, 22); 
console.log(worker2.fullName);                  
worker2.showSalary(); 
console.log("Experience: " + worker2.showExp); 
console.log(worker2.showSalaryWithExperience()); 
worker2.setExp = 1.5; 
console.log("New experience: " + worker2.showExp); 
worker2.showSalaryWithExperience(); 

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                  
worker3.showSalary(); 
console.log("Experience: " + worker3.showExp); 
console.log(worker3.showSalaryWithExperience()); 
worker3.setExp = 1.5; 
console.log("New experience: " + worker3.showExp); 
worker3.showSalaryWithExperience(); 

console.log(workerList);
worker1.sortSalaries(workerList);
 

// Task 5.
    class GeometricFigure {
      getArea() {
        return 0;
      }
      toString() {
        return Object.getPrototypeOf(this).constructor.name;
      }
    } 
    
    class Triangle extends GeometricFigure {
        constructor(a,b) {
            super();
            this.a = a;
            this.b = b;
        }
        getArea() {
            let triangleArea = (this.a * this.b)/2;
            return triangleArea;
        }
    }

    class Square extends GeometricFigure {
        constructor(a){
            super();
            this.a = a;
        }
        getArea() {
            let squareArea = (this.a ** 2);
            return squareArea;
        }
    }

    class Circle extends GeometricFigure {
        constructor(r){
            super();
            this.r = r;
        }
        getArea() {
            let circleArea = (Math.PI * this.r ** 2);
            return circleArea;
        }
    }

    function handleFigures(figures) {
        return figures.reduce(function(sum,figure){
            if (figure instanceof GeometricFigure)
            {
                console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
                return sum + figure.getArea();
            }
        },0);
    }

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)]; 
console.log(handleFigures(figures));
*/