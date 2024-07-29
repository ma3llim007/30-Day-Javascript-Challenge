// Task 05: Implement a queue class with methods enqueue (add element), dequene (remove element), and front (view the first element).
class fiveTaskQueue {
    constructor() {
        this.item = [];
    }

    enqueue(value) {
        this.item.push(value);
    }

    dequene() {
        if (this.isEmpty()) {
            console.log('Queue is empty.');
            return null;
        }
        return this.item.shift();
    }

    display() {
        if (this.isEmpty()) {
            console.log('Queue is empty.');
            return null;
        }
        console.log(this.item);
    }
    isEmpty() {
        return this.item.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            console.log('Queue is empty.');
            return null;
        }
        console.log(this.item[0]);
    }
}

const main = () => {
    const fiveTaskQueueObj = new fiveTaskQueue();
    fiveTaskQueueObj.enqueue(1);
    fiveTaskQueueObj.enqueue(2);
    fiveTaskQueueObj.enqueue(3);
}

main()