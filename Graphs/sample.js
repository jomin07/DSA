class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1,vertex2){
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            return;
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(adjacentVertex,vertex);
        }

        delete this.adjacencyList[vertex];
    }

    display(vertex){
        for(let vertex in this.adjacencyList){
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }

    bfs(start){
        const queue = [start];
        const visited = new Set();
        const result = [];

        while (queue.length) {
            const vertex = queue.shift();

            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);

                for(let neighbor of this.adjacencyList[vertex]){
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    dfs(start){
        const stack = [start];
        const visited = new Set();
        const result = [];

        while (stack.length) {
            const vertex = stack.pop();

            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);

                for(let neighbor of this.adjacencyList[vertex]){
                    stack.push(neighbor);
                }
            }
        }
        return result;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A','B');
graph.addEdge('A','D');
graph.addEdge('B','C');
graph.addEdge('B','E');
graph.addEdge('D','E');
graph.addEdge('F','E');

graph.display();
console.log(graph.hasEdge('A','B'));
graph.display();

console.log("BFS");
console.log(graph.bfs("A"));

console.log("DFS");
console.log(graph.dfs("A"));