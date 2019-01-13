// mapArray[complement][j]
var twoSum = function(nums, target) {
  let mapArray = {}
  for (let i = 0; i < nums.length; i++){
    if (mapArray[nums[i]]){
      mapArray[nums[i]].push(i);
    } else {
      mapArray[nums[i]] = [i];
    }
  }
  for (let i = 0; i < nums.length; i++){
    let complement = target - nums[i];
    if (mapArray[complement]){
      for(j = 0; j < mapArray[complement].length; j++ ){
        if(mapArray[complement][j] !== i){
          return [i, mapArray[complement][j]]
        }
      }
    }
  }
  return false;
};

console.log(twoSum([2,7,7,11,15],9))
