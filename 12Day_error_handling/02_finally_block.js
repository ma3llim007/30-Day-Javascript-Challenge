// Task 03: write a script that includes a try-catch block and a finalyy block. log messaeg in the try,catch,and finally blocks to observe the execution flow.
const threeTask = () => {
    try {
        console.log("Try Block");
        throw new Error("Catch Block");
    } catch (error) {
        console.log(error.message);
    }
    finally {
        console.log("finally Block");
    }
}


threeTask();