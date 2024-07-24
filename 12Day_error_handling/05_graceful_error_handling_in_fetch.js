// Task 08: use the fetch api to request data from an invalid url and handle the error using .catch() log an appropriate error messsage to the console.
const eightTask = () => {
    const invalidURl = "https://invalidurl.example.com/data";
    fetch(invalidURl).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            return response.json();
        }
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error.message);
    })
}

// Task 09: use the fetch api to request data from an invalid url within an async function and handle the error using try-catch. log an appropriate error message.
const nineTask = async () => {
    const invalidURl = "https://invalidurl.example.com/data";
    try {
        const response = await fetch(invalidURl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
nineTask();