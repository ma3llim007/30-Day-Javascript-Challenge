// TASK 01
export const sumTwoNumber = (num1, num2) => {
    return num1 + num2;
}
// TASK 02
export const person = {
    name: "Mohd Sameer",
    age: 20,
    great() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}



// Task 03
const threeTask1 = () => {
    console.log("threeTask 01");
}
const threeTask2 = () => {
    console.log("threeTask 02");
}
const threeTask3 = () => {
    console.log("threeTask 03");
}
export { threeTask1, threeTask2, threeTask3 };


// Task 04
const taskFour = () => {
    console.log("Task Four");
}

export default taskFour;


// Task 05:
export const PI = 3.14159;
export const fiveTask1 = () => {
    console.log("Five Task 01");
}
export const fiveTask2 = () => {
    console.log("Five Task 02");
}
export const fiveTask3 = () => {
    console.log("Five Task 03");
}