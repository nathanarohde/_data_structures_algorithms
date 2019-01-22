// LIFO last in, first out push, pop
// Managing function invocations, Undo / Redo, Routing
// Not built in Javascript structure

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

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop(){
    // if empty return null
    // if only 1 node, set the first and last to be null
    // remove last node
    // edit information of previous node
    if(!this.first) return null;
    var temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return  temp.value;
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
// stack.pop();
console.log(stack);
