// left less then parent, right greater than
// Insertion - O(log n)
// Searching - O(log n)
// Average & best O(log n), worst O(n)

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    var newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while(true){
        if(value < current.value){
          if(current.left === null){
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if(value > current.value){
          if(current.right === null){
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value){
    if(this.root === null) return false;
    var current = this.root,
    found = false;
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
console.log(tree);
console.log(tree.find(2));
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(9);
