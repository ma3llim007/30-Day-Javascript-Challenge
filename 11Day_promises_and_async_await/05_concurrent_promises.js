// Task 08: use promise.all to wait for multiple promises to resolve and then log all their values.
const eightTask = () => {
    const promiseOne = new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolve 01");
        }, 1000);
    });
    const promiseTwo = new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolve 02");
        }, 1000);
    });
    const promiseThree = new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolve 03");
        }, 1000);
    });
    const promiseFour = new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolve 04");
        }, 1000);
    });

    Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour]).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    })
}

// Task 09: use promise.race to log the value of the first promise that resolves among multiple promises.
const nineTask = () => {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 1 resolved after 3 seconds");
        }, 3000);
    });

    const promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 2 resolved after 1 second");
        }, 1000);
    });

    const promise3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 3 resolved after 2 seconds");
        }, 2000);
    });

    Promise.race([promise1, promise2, promise3])
        .then((value) => {
            console.log(value); // Logs: "Promise 2 resolved after 1 second"
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

const main = () => {
    nineTask()
}
main();