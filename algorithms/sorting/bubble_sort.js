function bubbleSort( arr ){
  // start at index[0]
  // terminating condition all elements sorted
  // n2?
  // no swaps short circuits if nearly sortedArray
  // best O(n) worst O(n2)
  var noSwaps;
  for (let h = 0; h < arr.length; h++){
    noSwaps = true;
    for (let i = 0; i < arr.length - h - 1; i++){
      console.log(arr, arr[i], arr[i+1]);
      if (arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// is a hash any better? n * nlog(n)
// function bubbleSort( arr ){
//   hashMap = {}
//   sortedArray = []
//   for (let i=0; i < arr.length; i++){
//     if (hashMap[arr[i]]) {
//       hashMap[arr[i]] += 1;
//     } else {
//       hashMap[arr[i]] = 1
//     }
//   }
//   for ( key in hashMap ){
//     // console.log(typeof hashMap[key]);
//     for (let i=0; i < hashMap[key]; i++){
//       sortedArray.push(key);
//     }
//   }
//   return sortedArray;
// }

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))
