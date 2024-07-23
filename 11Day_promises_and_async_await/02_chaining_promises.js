// Task 03: Create a sequence of promises that simulate fetching data from a server. chain the promises to log messages in a specific order
const fetchDataFromServer1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from server 1");
        }, 1000);
    });
}
const fetchDataFromServer2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from server 2");
        }, 1000);
    });
}
const fetchDataFromServer3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from server 3");
        }, 1000);
    });
}

const main = () => {
    fetchDataFromServer1().then((data1) => {
        console.log(data1);
        return fetchDataFromServer2();
    }).then((data2) => {
        console.log(data2);
        return fetchDataFromServer3();
    }).then((data3) => {
        console.log(data3);
    }).catch((error) => {
        console.error(error);
    });
}
main()