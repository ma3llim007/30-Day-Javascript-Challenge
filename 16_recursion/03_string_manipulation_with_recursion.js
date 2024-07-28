// Task 05: Write a recursive function to reverse a string. log the result for a few test cases.
const taskFive = (string) => {
    if (string === '') return '';

    return string[string.length - 1] + taskFive(string.slice(0, -1));
}

// Task 06: Write a recursive function to check if a string is a palindrome. log the result for a few test cases
const taskSix = (string, startIndex, endIndex) => {
    if (startIndex <= endIndex) {
        if (string[startIndex] !== string[endIndex]) {
            return false;
        } else {
            taskFive(string, startIndex + 1, endIndex - 1);
            return true;
        }        
    }
}
const main = () => {
    let taskFiveObj = taskFive("sameer");
    let string = "madam";
    let start = 0;
    let end = string.length - 1;
    let taskSixObj = taskSix(string, start, end);
    if (taskSixObj) {
        console.log(`${string} Is Palindrome`);
    } else {
        console.log(`${string} Is Not Palindrome`);
        
    }
}

main();