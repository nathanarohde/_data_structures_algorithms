// Run time complexity
// 60ms fastest 44ms top 13% of solutions
// Memory complexity
// 37.9MB smallest 35.1 MB bottom 22%
var singleNumber = function(nums) {
  let counted = {};

  for (i = 0; i < nums.length; i++){
    if (counted[nums[i]]) {
      counted[nums[i]] += 1;
    } else {
      counted[nums[i]] = 1;
    }
  }

  for (number in counted) {
    if (number = 1){
      return number;
    }
  }
};

const singleNumber = nums => nums.reduce((a, b) => a ^ b);
// Suspected reduce as a solution, did not expect it to be fast.  Bitwise operator a surprise.

// Run time complexity
// 56ms fastest 44ms top 6% of solutions
// Memory complexity
// 35.3MB smallest 35.1 MB top 8%

// Reduce function a bitwise are fastest way of find uniques?  Reduce is fast?
