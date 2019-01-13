// selectionSort does not rewrite array with the frequency of bubbleSort but I do not understand the exact performance implications
function selectionSort (arr){
  for (let h=0; h<arr.length; h++){
    smallest = h;
    let noSwaps = true;
    for (let i= h + 1; i<arr.length; i++){
      if (arr[smallest] > arr[i]){
        smallest = i;
        noSwaps = false;
      }
    }
    let temp = arr[h];
    arr[h] = arr[smallest];
    arr[smallest] = temp;
  }

  return arr;
}

console.log(selectionSort([5,1,2,4,3]));
