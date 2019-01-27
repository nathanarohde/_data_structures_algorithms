class Graph {
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    this.adjacencyList[vertex] = [];
  }
  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1,v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
console.log(g);
g.addEdge("Dallas","Tokyo");
g.addEdge("Dallas", "Aspen");
console.log(g);
