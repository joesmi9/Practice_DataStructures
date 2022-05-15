class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Underflow");
        }

        /**
         * Javascript built in shift: The shift() method removes the first element from an array and returns that removed element
         */
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        }

        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        console.log(this.items);
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.printQueue();

queue.enqueue(2);
queue.printQueue();

queue.enqueue(3);
queue.printQueue();

queue.enqueue(4);
queue.printQueue();

queue.printQueue();

queue.dequeue();

queue.printQueue();
