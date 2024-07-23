// Task 04: Write an async function that waits for a promise to resolve and then logs the resolved value.
const fourTask = async () => {
    console.log("Program Start");
    const fourTaskPromises = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Four Task")
        }, 2000);
    });

    try {
        const reselt = await fourTaskPromises;
        console.log(reselt);
    } catch (error) {
        console.error(error);
    }
    console.log("Program End");
}

// Task 05: Write an async function that handles a rejected promise using try-catch and logs the error messages
const fiveTask = async () => {
    console.log("Program Start");
    const fivePromise = new Promise((resolve, reject) => {
        let num = 5;
        setTimeout(() => {
            if (num === 6) {
                resolve("resolve");
            } else {
                reject("reject");
            }
        }, 2000);
    });
    try {
        const result = await fivePromise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

const main = () => {
    fiveTask();
}
main();