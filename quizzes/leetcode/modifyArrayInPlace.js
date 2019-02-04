var removeElement = function(nums, val) {
  // For doesn't work because it will skip next number in cycle
  // for (let i = 0; i<nums.length; i++){
  //     if (nums[i] === val) nums.splice(i, 1);
  //     console.log(nums);
  // }
  if(nums.length === 0) return nums;

  let i = 0;

  while(i < nums.length) {
      if(nums[i] === val) {
          nums.splice(i,1);
          i--;
      }
      i++;
  }

  return nums.length;
};
console.log(removeElement([0,1,2,2,3,0,4,2]
, 2));
// Convoluted solution due to confusion over desired returned results.  A way to solve the problem without slice.
    // let length = nums.length;
    // let i = 0;
    // while (i < length) {
    //   if (nums[i] === val ){
    //     if (nums[length - 1] != val){
    //       nums[i] = nums[length - 1];
    //       length--;
    //     } else {
    //       length--;
    //       for (let j = length - 1; j > i; j--){
    //         if (nums[j] === val){
    //           length--;
    //         } else {
    //           nums[i] = nums[j];
    //           length --;
    //           break;
    //         }
    //       }
    //     }
    //   }
    //   i++;
    // }
    // return nums.slice(0, length);
