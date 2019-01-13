// function binarySearch(arr, val){
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right)/2);
//
//   if( arr[left] === val) return left;
//   if( arr[right] === val) return right;
//
//   while (left != middle) {
//     if( arr[middle] === val) return middle;
//     if (arr[middle] > val){
//       right = middle;
//     } else {
//       left = middle;
//     }
//     middle =  Math.floor((left + right)/2);
//   };
//   return -1;
// }

// example shifts start and end without checking if they === middle
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

// console.log(binarySearch([2,5,6,9,13,15,28,30], 5));
console.log(binarySearch([1,2,3,4,5],2));
