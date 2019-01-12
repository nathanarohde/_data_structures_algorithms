var twoSum = function(nums, target) {
  // array must be unsorted;
  // Sort converts to string and compare UTF codes.
  for (let i = 0; i < nums.length; i++){
    for (let j = 1; j < nums.length; j++){
      if (i === j) continue;
      if (nums[i]+nums[j] === target) return [i, j];
    }
  }
};
