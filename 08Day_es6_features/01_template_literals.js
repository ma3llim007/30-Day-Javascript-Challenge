// Task 01: Use Template literals to create a string that includes variables for a person's name and age, and log the string the console
const oneTask = () => {
    const name = "Mohd Sameer";
    const age = 20;
    console.log(`My Name Is ${name} And My Age ${age}`);
}

// Task 02: Create a multi-line string using template literals and log it to the console
const twoTask = () => {
    const name = "Mohd Sameer";
    const age = 20;
    const messsage = `
        My Name Is
        ${name}
        And My Age
        ${age}
    `;
    console.log(messsage);
}

const main = () => {
    twoTask();
}
main()