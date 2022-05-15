class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Opearations
     */
    add(element) {

        const node = new Node(element);

        if (this.head == null)
            this.head = node;
        else {

            let current = this.head;

            // iterate to the end of the list
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return console.log("Please enter a valid index.");
        }

        // creates a new node
        const node = new Node(element);
        let prev;

        let curr = this.head;


        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;

            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;

    }

    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.element;
        }
    }

    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList
}