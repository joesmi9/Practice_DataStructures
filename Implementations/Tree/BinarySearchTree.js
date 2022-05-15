class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(data) {

        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {

        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(value) {

        // root is re-initialized with the root of a modified tree.
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, value) {

        if (node === null) {
            return null;
        }

        else if (value < node.data) {
            node.left = this.removeNode(node.left, value);
            return node;
        }

        else if (value > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        }

        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

}


const bst = new BinarySearchTree();

bst.insert(1);
bst.insert(10);
bst.insert(3);
bst.insert(12);
bst.insert(4);
bst.insert(5);
bst.insert(52);
bst.insert(59);

