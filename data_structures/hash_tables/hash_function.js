// strings only
class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.push(this.keyMap[i][j][0])){
            valuesArr.push(this.keyMap[i][j][0]);
          };
        }
      }
    }
    return valuesArr;
  }

  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.push(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1]);
          };
        }
      }
    }
    return valuesArr;
  }
}

// Insertion: O(1)
// Deletion O(1)
// Access O(1)

// seperate chaining v linear probing
// Does javascript us linear probing which there prevents it from assigning multiple values to the same key.

console.log(hash('blue', 12));
console.log(hash('green', 12));
