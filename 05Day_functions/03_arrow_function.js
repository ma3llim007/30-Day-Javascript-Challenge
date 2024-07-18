// Task 05: Write an arrow function to calculate the sum of two numbers and return the result.
const fiveTask = (a,b) => {
    return a + b;
}

// Task 06: Write an arrow function to check if a string contains a specifi character and return a boolean value.
const sixTask = (string,char) => {
    if (string.includes(char)) {
        return true;
    } else {
        return false;
    }
}


function main() {
    let fiveTaskRes = fiveTask(5, 5);
    let string = "Mohd Sameer";
    let character = "asdfadf";
    let sixTaskRes = sixTask(string, character);
    console.log(sixTaskRes);
}
main()