// Fifo, first in first out
// Background tasks
// Uploading resources
// Print/ Task processing

// Insertion O(1)
// Removal O(1)
// Search O(N)
// Access O(N)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(){
    if(!this.first) return null;

    var temp = this.first;
    if(this.first === this.last){
      this.last = null;
      this.size--;
      return temp.value;
    }
  }
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q);
q.dequeue();
console.log(q);
