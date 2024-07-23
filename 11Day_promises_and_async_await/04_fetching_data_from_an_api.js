// Task 06: use the fetch api to get data from a public api and log the response data to the console using promises.
const sixTask = () => {
    const APIURl = 'https://jsonplaceholder.typicode.com/posts';
    fetch(APIURl).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText)
        }
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    })
}

// Task 07: use the fetch api to get data from a public api and log the response data to the console using async await
const sevenTask = async () => {
    const APIURl = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(APIURl);
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText)
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

const main = () => {
    sevenTask()
}
main();