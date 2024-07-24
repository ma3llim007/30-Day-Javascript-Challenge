// Task 06: Create a promise that randomly resolves or rejects. use .catch() to handle the rejection and log an appropriate message to the console
const sixTask = () => {
    return new Promise((resolve, reject) => {
        const booleanValue = Math.random() >= 0.5;
        setTimeout(() => {
            if (booleanValue) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected.");
            }
        }, 1000);
    });
}


// sixTask().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// Task 07: use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message
const sevenTask = () => {
    return new Promise((resolve, reject) => {
        const booleanValue = Math.random() >= 0.5;
        setTimeout(() => {
            if (booleanValue) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected.");
            }
        }, 1000);
    });
}

const main = async () => { 
    try {
        const message = await sevenTask();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}
main();