function averagePair( arr, targetAverage){
  // multiple pointers
  let left = 0;
  let right = arr.length - 1;
  while (left < right){
    let avg = arr[left] + arr[right])/2;
    if ( avg === targetAverage ){
      return true;
    } else if ( avg > targetAverage){
      right--;
    } else {
      left++;
    }
  }
  return false;
}
