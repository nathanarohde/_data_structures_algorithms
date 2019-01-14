function insertionSort(arr) {
  for (let i=1; i < arr.length; i++){
    var currentVal = arr[i]
    if( currentVal < arr[i-1]){
      for(let j = i-1; j >= 0 && arr[j] > currentVal; j--){
        arr[j+1] = arr[j];
        arr[j] = currentVal;
        // console.log(arr);
      }
    }
  }
  // worst O(n2) best O(n)
  return arr;
}

console.log(insertionSort([2,1,9,76,4]));
