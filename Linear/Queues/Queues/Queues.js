class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    display() {
        console.log(this.items.toString())
    }
}

let queue = new Queue();

queue.display()

queue.enqueue(12)
queue.display()

queue.enqueue(17)
queue.display()

queue.enqueue(10)
queue.display()

queue.dequeue()
queue.display()

queue.dequeue()
queue.display()

queue.dequeue()
queue.display()
