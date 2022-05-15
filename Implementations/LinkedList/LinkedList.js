class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {

        const node = new Node(value);

        if (this.head == null) {
            this.head = node;
        } else {
            const current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    insertAt(node, index) {

        const node = new Node(value);

        const current = this.head;

        if (index == 0) {
            node.next = current;
            this.head = node;
        } else {
            let i = 0;

            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }

            node.next = current;
            previous.next = node;
        }
        this.size++;
    }


    removeFrom(index) {
        /**
         * TODO
         */
    }

    removeElement(value) {
        /**
        * TODO
        */
    }
}