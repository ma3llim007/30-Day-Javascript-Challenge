// Task 01: Create a promise that resolves with a message after a 2-second timeout and log the messge to the console.
const oneTask = () => {
    console.log("Program Start");
    const delayMessage = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 01: ");
        }, 2000);
    });
    delayMessage.then((message) => {
        console.log(message);
    });
}

// Task 02: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
const twoTask = () => {
    console.log("Program Start");
    const delayError = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Task 02:"));
        }, 2000);
    });
    delayError.catch((error) => {
        console.log(error);
    });
}


const main = () => {
    twoTask()
}
main()