// Task 1 : Write a program to add two number and log the result to the console
function addToNumber(a, b) {
    if (a, b) {
        console.log("Sum Of Two Number:- " + a + b);
    } else {
        console.log("Enter Both Number For Addition");
    }
}

// addToNumber(1,3);

// Task 2: Write a program to subtract two number and log the result to the console
function subtractToNumber(a, b) {
    if (a, b) {
        if (a >= b) {
            console.log("Subtraction Of Two Number:- " + (a - b));
        } else {
            console.log("Please Assign Biggest Number To Subtract Number");
        }
    } else {
        console.log("Enter Both Number For Subtract");
    }
}
// subtractToNumber(6, 3);

// Task 3: Write To program to Multiply two number and log the result to the console
function multiplyTwoNumber(a, b) {
    if (a, b) {
        if (a === 0 || b === 0) {
            console.log("You are trying to Multiply By Zero As The Answer Your Well get as Zero");
        } else {
            console.log("Multiply Of Two Number:- " + a * b);
        }
    }
    else {
        console.log("You are trying to Multiply By Zero As The Answer Your Well get as Zero");
    }
}

// multiplyTwoNumber(5, 5);

// Task 4: Write To program to Divide Two Nubmer and  log the result to the console
function divideTwoNumber(a, b) {
    if (a, b) {
        if (a === 0 || b === 0) {
            console.log("You are trying to Divide By Zero As The Answer Your Well get as Zero");
        } else {
            console.log("Divide Of Two Number:- " + a / b);
        }
    }
    else {
        console.log("You are trying to Divide By Zero As The Answer Your Well get as Zero");
    }
}
// divideTwoNumber(50,5)

// Task 5: Write To program to find the remainder when one number is divided by another and log the result to the console
function remainderTwoNumber(a, b) {
    let remainder = a % b;
    if (a, b) {
        if (a === 0 || b === 0) {
            console.log("You are trying to Moudele Divide By Zero As The Answer Your Well get as Zero");
        } else {
            console.log("Moudele Divide Of Two Number:- " + remainder);
        }
    }
    else {
        console.log("You are trying to Moudele Divide By Zero As The Answer Your Well get as Zero");
    }
}
// remainderTwoNumber(25, 7);