// iterate over array
// add two consecutive values
// return hightest two consective values

function maxSubarraySum( arr, num ){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i= num; i < arr.length; i++) {
    // remove first, add next
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}
