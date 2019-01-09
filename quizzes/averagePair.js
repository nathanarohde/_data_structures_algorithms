function averagePair( arr, targetAverage){
  // multiple pointers
  let left = arr[0];
  let right = arr.length;
  while (left < right){
    if ( (left + right)/2 === targetAverage ){
      return true;
    } else if ( (left + right)/2 > targetAverage){
      right--;
    } else {
      left++;
    }
  }
  return false;
}
