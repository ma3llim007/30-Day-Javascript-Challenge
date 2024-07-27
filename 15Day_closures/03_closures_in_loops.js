// Task 05: Write a loop that creates an array of functions. Each function should log its index when called. use a closure to ensure each function logs the correct index
const sixTask =(size) =>{
    let FunctionArray = [];

    for (let i = 0; i < size; i++){
        FunctionArray[i] = (function (i) {
            return function () {
                console.log(i);
            };
        })(i);
    }
    return FunctionArray;
}

const functions = sixTask(5);

functions[0]();
functions[1]();
functions[2]();
functions[3]();
functions[4]();