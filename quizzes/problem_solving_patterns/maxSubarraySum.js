function maxSubarraySum(array, num){
  if (num > array.length) { return null; }

  let total = 0;
  for(let i = 0; i < num; i++){
    total += array[i];
  }
  let compareToTotal = total;
  for(let i = num; i < array.length; i++){
     compareToTotal = compareToTotal - array[i-num] + array[i];
    total = Math.max(total, compareToTotal);
    // if (total < compareToTotal){
    //   total = compareToTotal;
    // }
  }
  return total;
}

console.log(maxSubarraySum([-3,4,0,-2,6,-1],2));
