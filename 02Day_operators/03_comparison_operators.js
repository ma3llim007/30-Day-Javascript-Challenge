// Task 1: Write a program compare two numbers using > and < and log the result to the console.
function oneCompare(a, b) {
    if (a > b) {
        console.log("A is Greater Than B");
    } else {
        console.log("A is Less Than B");
    }
}

// Task 2: Write a program compare two numbers using >= and <= and log the result to the console.
function twoCompare(a, b) {
    if (a >= b) {
        console.log("A is Greater Than B");
    } else if(b >= a){
        console.log("A is Less Than B");
    }
}


// Task 3: Write a program to compare two numbers using == and === and log the result to the console
function threeCompare(a, b) {
    if (a == b) {
        console.log("A is Equal To B");
    } else{
        console.log("A is Not Equal To B");
    }
}

function fourCompare(a, b) {
    if (a === b) {
        console.log("A is Equal To B");
    } else{
        console.log("A is Not Equal To B");
    }
}
    
function main() {
    let num1 = '1';
    let num2 = 1;
    fourCompare(num1,num2)
}
main();