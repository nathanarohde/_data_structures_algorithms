// c[d][j]
// top 40th percentile solution
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
//not quite optimal solution

// minified shaves 4ms?
// var twoSum = function(a, b) {
//   let c = {}
//   for (let i = 0; i < a.length; i++){
//     (c[a[i]]) ? c[a[i]].push(i): c[a[i]] = [i];
//   }
//   for (let i = 0; i < a.length; i++){
//     let d = b - a[i];
//     if (c[d]){
//       for(j = 0; j < c[d].length; j++ ){
//         if (c[d][j] !== i) return [i, c[d][j]];
//       }
//     }
//   }
//   return false;
// };

console.log(twoSum([2,7,7,11,15],9))
