class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
// if there is no head, return udefined
// store the current tail in a variable to return later
// if the length is 1, set the head and tail to be null
// update the tail to be the previous Node
// set the newTail's next to null
  pop(val){
    if(!head) return undefined;
    var poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift(){
    if(this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1){
      this.head = null;
      this.tail = null;
    }
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  // Create a new node with the value passed to the function
  // If the length is 0
  // Set the head to be the new node
  // Set the tail to be the new node
  // Otherwise
  // Set the prev property on the head of the list to be the new node
  // Set the next property on the new node to be the head property
  // Update the head to be the new node
  // Increment the length
  unshift(val){
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  get(index){
    if(index < 0 || index >= this.length) return null;
    var count = 0;
    var current = this.head;
    if (index <= this.length/2){
      while(count !== index){
        current = current.next;
        count++;
      }
      return current;
    } else {
      var count = this.length - 1;
      var current = this.tail;
      while(count !== index){
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(index, val){
    var foundNode = this.get(index);
    if( foundNode != null ){
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return this.unshift(val);
    if(index === this.length) return this.push(val);
    var newNode = new Node(val);
    var beforeNode = this.get(index-1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.next = beforeNode;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
// Insertion O(1) Removal O(1) Searching O(n) Access O(n)

var list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("Hermione");
// console.log(list);
console.log(list.get(2));
