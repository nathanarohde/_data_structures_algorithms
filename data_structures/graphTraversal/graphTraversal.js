/*
If vertex is empty
return (this is base case)
add vertex to results list
mark vertex as visited
for each neighbor in vertex's neighbors:
if neighbor is not visited:
recursively call DFS on neighbor
*/
/*
Function should accept a starting node
create a list to store the end result, to be returned at the very end
Create an boject to store visited vertices
Create a helper function which accepts a vertex
The helper function should return early if the vertex is empty
The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
Loop over all of the values in the adjacencyList for that vertex
If any of those values have not been visited recursively invoke the helper function with that vertex
Invoke the helper function with the starting vertex.
*/

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

  depthFirstRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor)
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};

    visited[start] = true;
    while(stack.length){
      console.log(stack);
      let currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
      console.log(queue);
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
// console.log(g.depthFirstRecursive("A"));
// console.log(g.depthFirstIterative("A"));
console.log(g.breadthFirst("A"));

//   A
//  / \
// B   C
// |   |
// D--E
// \ /
//  F
