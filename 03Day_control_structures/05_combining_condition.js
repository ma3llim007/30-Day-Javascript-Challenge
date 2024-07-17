// Task 07: Write a program to check if a year is a leap year using multiple conditions and log the result to the console
function combiningCondition(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let year = 2024;
if (combiningCondition(year)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}