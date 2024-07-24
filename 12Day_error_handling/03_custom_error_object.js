// Task 04: create a custom error class that extends the built-in error class. throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomErrorMessage extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}

const fourTask = (numerator, denominator) => {
    try {
        if (denominator === 0) {
            throw new CustomErrorMessage("Cannot Divide By Zero");
        }
        console.log(numerator / denominator);
    } catch (error) {
        if (error instanceof CustomErrorMessage) {
            console.log(error.message);
        } else {
            console.log(error.message);
        }

    }
}

// Task 05: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. handle the custom error using a try-catch block.
const fiveTask = (inputValue) => {
    try {
        if (inputValue) {
            console.log(inputValue);
        } else {
            throw new Error("Input Is Empty");
        }
    } catch (error) {
        console.log(error.message);
    }

}
fiveTask();