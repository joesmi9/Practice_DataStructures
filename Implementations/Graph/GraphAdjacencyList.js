/**
 * Implementation of a graph using an adjacency list
 */
class Graph {
    constructor(numberOfVerticies) {
        this.numberOfVerticies = numberOfVerticies
        this.adjacencyList = new Map();
    }

    addVertex(v) {

        // Create an empty list in the hashmap
        this.adjacencyList.set(v, [])
    }

    addEdge(v, w) {

        this.adjacencyList.get(v).push(w);

        // If the graph is undirected, should add v to w
        // this.adjacencyList.get(w).push(v);
    }

    printGraph() {

        const keys = this.adjacencyList.keys();

        for (let key of keys) {

            const values = this.adjacencyList.get(key);
            console.log(`${key}: ${values}`);
        }
    }
}

let graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(3, 2);
graph.addEdge(3, 0);

graph.printGraph();