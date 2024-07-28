// Task 01: Write a recursive function to calculate the factorial of a number. log the result for a few test cases.
const oneTask = (number) => {
    if (number === 0) return 1;
    return number * oneTask(number - 1);
}

// Task 02: Write a recursive function to calculate the nth fibonacci number. log the result for a few test caces.
const twoTask = (number) => {
    if (number <= 1) return number;
    let numberOne = twoTask(number - 1);
    let numberTwo = twoTask(number - 2);
    return numberOne + numberTwo;
}


function main() {
    const oneTaskInstance = oneTask(5);
    console.log(oneTaskInstance);
}
main()