// Task 01: define a class person with properites name and age, and a method ti return greeting message. create an instance of the class and log the greeting message.
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    greeting() {
        console.log(`My Name is ${this.name} and my age is ${this.age}`);
    }

    updatePerson(newAge) {
        this.age = newAge;
        console.log(`Age updated. I am now ${this.age} years old.`);
    }

}
const taskOne = new person("Mohd Sameer", 15);
// taskOne.greeting();


// Task 02: Add a method to the person class that updates the ages property and logs the update ages
taskOne.updatePerson(20);