// Task 05: use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const fiveTask = () => {
    let array = [10, 20, 30, 40, 50];
    let newArray = [...array, 60, 70, 80, 90]
    console.log(newArray);
}

// Task 06: use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
const sixTask = (...num) => {
    console.log(num.reduce((accum, curr) => accum + curr));

}

const main = () => {
    sixTask(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
}
main()