// accepts array outputs boolean
var a = [ 1, 2 ]
var b = [ 1, 9 ]

// O(n2)
// function same(array1, array2) {
//   var i = 0;
//   if (array1.length !== array2.length) {
//     console.log(false + ' length');
//   } else {
//     while( array2.includes(array1[i]**2)) {
//       var index = array2.indexOf(array1[i]);
//       array2.splice(index, 1);
//       i++;
//     }
//     i === array1.length ? console.log(true) : console.log(false);
//   }
// }

// O(n log n)
// function same(array1, array2){
//   if (array1.length !== array2.length) {
//       return false;
//   } else {
//     sortedarray1 = array1.sort();
//     sortedarray2 = array2.sort();
//     for (i = 0; i< array1.length; i++){
//       if ( sortedarray1[i]**2 !== sortedarray2[i]){
//         return false;
//       }
//     }
//     return true;
//   }
// }

// 0(n)
var a = [ 1, 2, 3, 4, 5 ]
var b = [ 1, 4, 9, 16, 25 ]

function same(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[1]){
      return false;
    }
  }
  return true;
}

same (a, b);
