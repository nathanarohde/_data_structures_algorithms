// iterate over an array find it there are two values that === 0
// A negative and a positive

// iterate and check for a number then its absolute, nested for

// function sumZero(arr) {
//   var lookup = {};
//   for (let i = 0; i < arr.length; i++) {
//     let number = arr[i];
//     lookup[number] = true;
//     if (lookup[-number] && number !== 0) {
//       return ([number, -number])
//     }
//   }
//   return false;
// }
function sumZero(arr){
  let left = 0;
  let right = arr.length -1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-3,-2,-1,0,1,2,3]);
sumZero([-2,0,1,3]);
sumZero([1,2,3]);
