// Implement function to arrange elements on either side of  a pivot
// designate element as a pivot
// rearrange elements in array so lesser values move to left greater values move to right
// order of elements to side of pivot doesn't matter
// should do in place not create a new array
// when done return the index of the pivot

// three arguements array, start index, end index
// grab pivot from start of the array
// store pivot index in variable
// loop through array until end
// if pivot is greater than current element, increment the pivot variable and then swap
// swap the starting element with the pivot index
function quickSort(arr, left=0, right=arr.length -1){
  if (left < right){
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex-1);
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}

function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i< arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}
// var arr = [5, 2, 1, 8, 4, 7, 6, 3]
// console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]));

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
