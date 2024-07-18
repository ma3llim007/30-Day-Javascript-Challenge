// Task 07: Write a function that takes two parameters and returns their product. provide a default value for the second parameter.
function sevenTask(a, b = 5) {
    console.log(a, b);
}

// Task 08: Write fa function that takes a person's and age and returns a greeting message. provide a default value for the age
function eightTask(name, age) {
    let greetingMessage = `Hello, ${name}! You are ${age} years old.`;
    console.log(greetingMessage);
}





function main() {
    eightTask("Mohd Sameer",19);
}
main()