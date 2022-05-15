class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) {
            console.log("Underflow");
        }

        /**
         * Javascript built in pop: The pop() method removes the last element from an array and returns that element. 
         */
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printStack() {
        console.log(this.items)
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.printStack()

console.log(stack.peek());

console.log(stack.pop());

stack.printStack()

console.log(stack.pop());

stack.printStack()

stack.push(5);

stack.printStack()
