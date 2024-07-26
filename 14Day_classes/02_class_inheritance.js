// Task 03: Define a class student that extends the person class. add a property studentID and a method to return the student ID. create an instance of the student class and log the student ID
class person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My Name is ${this.name} and my age is ${this.age}`);
    }
}

class Student extends person{
    constructor(name, age,studentId) {
        super(name,age)
        this.studentId = studentId;
    }
    greeting() {
        console.log(`My Name is ${this.name} and my age is ${this.age} and My Student Id ${this.studentId}`);
    }
}

const StudentObj = new Student("Mohd Sameer",20,'S123456');
// console.log(StudentObj);


// Task 04: override the greeting method in the student class to include the student ID in the message. log the override greeting message
StudentObj.greeting();