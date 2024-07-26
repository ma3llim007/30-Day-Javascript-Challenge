// Task 07: Add a getter method to the person class to return the full name (assume a firstName and lastName property).create an instance and log the full name using the getter
class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + this.lastName;
    }
    set fullName(name) {
        const [firstname, lastname] = name.split(' ');
        this.firstName = firstname;
        this.lastName = lastname;
    }
}
const personObj = new Person("Md ", "Sameer");
// console.log(personObj.fullName);

// Task 08: Add a setter method to the person class to update the name properites (firstName and lastName). update the name the setter and log the update full name.
personObj.fullName = "Mohd Sameer";
console.log(personObj.firstName);
console.log(personObj.lastName);