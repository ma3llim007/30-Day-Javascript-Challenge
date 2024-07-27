// Task 03: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call
const threeTask = () => {
    let previousUniqueId = 0;
    return function () {
        previousUniqueId++;
        return previousUniqueId;
    }
}

const threeInstance = threeTask();
threeInstance();

// Task 04: crete a closure that captures a user's name and returns a function that greets the user by name
const fourTask = () => {
    let username = "Mohd Sameer";
    return function () {
        console.log(`Welcome How Are You ${username}`);
    }
}
const fourInstnace = fourTask();
fourInstnace()