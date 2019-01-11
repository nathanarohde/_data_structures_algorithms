function countUniqueValues(arr){
  // For a sorted array only, increments everytime new value != previous value, previous value likely doesn't need to be stored could use arr[i] != arr[i - 1]
  if ( arr.length === 0){
    return 0;
  }
  let uniqueValues = 1;
  let currentValue = arr[0];
  for (let i=1; i < arr.length; i++ ){
    if (arr[i] != currentValue ){
      uniqueValues++;
      currentValue = arr[i];
    }
  }
  return uniqueValues;
}

countUniqueValues([-1,1,1,1,2,3])
