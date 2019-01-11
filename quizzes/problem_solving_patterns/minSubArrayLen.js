// iterate over an array
// check if iterate sum of array is greater than submitted value
 //if yes is it possible to shorten the array?
// if yes shorten as much as possible removing values from front, then shift window
function minSubArrayLen(arr, target){
  let sum = 0;
  let subArrayLength = 0;

  for (let i=0; i < arr.length; i++){
    if (sum < target){
      sum += arr[i];
    } else {
      subArrayLength = i + 1;
      return;
    }
  }
  console.log(subArrayLength);
}

minSubArrayLen([2,3,1,2,4,3], 7);
