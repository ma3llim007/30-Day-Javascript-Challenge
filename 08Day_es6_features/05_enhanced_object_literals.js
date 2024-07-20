// Task 08: Use Enchanced object literals to create an object with methods and properties, and log the object to the console
const eightTask = () => {
    const name = "Alice";
    const age = 25;

    const person = {
        name, age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        },
        ['Say' + 'Age']() {
            console.log(`I am ${this.age} years old.`);
        }
    }
    person.greet();
    person.SayAge();
}

// Task 09: Create an object with computed property names based on variables and log the object to the console
const nineTask = () => {
    const prop1 = "name";
    const prop2 = "age";
    const person = {
        [prop1]: "Mohd Sameer",
        [prop2]: 20,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    person.greet();
}
const main = () => {
    nineTask()
}
main()