// Run time complexity O(n)
// 64ms fastest 52ms top 7% of solutions
// Memory complexity O(n)
// 42MB smallest 37 MB bottom 33%
// var containsDuplicate = function(nums) {
//   let hash = {}
//   for (let i = 0; i < nums.length; i++){
//     if (hash[nums[i]]){
//       return true;
//     } else {
//       hash[nums[i]] = true;
//     }
//   }
//   return false;
// };

// Run time complexity O(n log n)
// 100ms fastest 52ms bottom 25% of solutions
// Memory complexity O(1)
// 38.5MB smallest 37 MB top 15%
// Sorting solution possibly faster in large data situations
var containsDuplicate = function(nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) return true;
  }
  return false;
}

// containsDuplicate([1,2,3,1]);
console.log(containsDuplicate([1,2,3,1]));
