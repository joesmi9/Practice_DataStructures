class Stack {
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) {
            return "No elements in Stack";
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }

    display() {
        console.log(this.items.toString())
    }
}

const stack = new Stack();

stack.push(20);
stack.display();

stack.push(30);
stack.display();

stack.push(40);
stack.display();

stack.pop();
stack.display();

console.log(stack.peek())
