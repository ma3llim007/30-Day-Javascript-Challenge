// Task 05: add a static method to the person class that return a generic greeting message. call this static method without creating an instance of the class and log the message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // static age;
    greeting() {
        console.log(`My Name is ${this.name} and my age is ${this.age}`);
    }
    static schoolName = 'Sample High School';

    static describeSchool() {
        console.log(`This student attends ${this.schoolName}.`);
    }
}

class Student extends Person {
    static numberOfStudent = 0;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.numberOfStudent++;
    }

    getStudentID() {
        return this.studentID;
    }

    static schoolName = 'Sample High School';

    static describeSchool() {
        console.log(`This student attends ${this.schoolName}.`);
    }
}


const studentObj = new Student("Mohd Sameer", 20, 'S123');
const studentObj2 = new Student("Mohd Sameer", 20, 'S123');
const studentObj3 = new Student("Mohd Sameer", 20, 'S123');
studentObj.greeting();
console.log(Person.schoolName);
Person.describeSchool();

// Task 06: Add a static property to the student class to keep track of the number of students created. increament this property in the constructor and log the total number of students
console.log(Student.numberOfStudent);