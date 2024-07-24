// Task 01: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropiate message to the console
const oneTask = () => {
    throw new Error("Something Went Wrong!");
}

// Task 02: create a function that divides two numbers and throws an error if the denominator is zero. use a try-catch block to handle this error
const twoTask = (numerator, denominator) => {
    try {
        if (denominator === 0) {
            throw new Error("Cannot Divide By Zero");
        }
        console.log(numerator / denominator);
    } catch (error) {
        console.log(error.message);
    }
}


const main = () => {
    twoTask(10,10)
}
main();