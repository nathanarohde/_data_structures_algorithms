// 88 test cases

//76ms vs 52 ms bottom 25%
//35.3mb vs 34.8 bottom 20%
//middle redundancy don't need the starting divide and conquer.
//first attempt, no performance difference from fastest code due to uncontrolled variables?

// var searchRange = function(nums, target) {
//     let min = 0;
//     let max = nums.length - 1;
//     if (nums.length === 0) return [-1, -1];
//     // knownLocation will recieve last min point, a middle point that matches target, last max point
//
//     let knownLocation = divideAndConquer(min, max, nums, target);
//     if (knownLocation === [-1,-1]) return [-1, -1];
//
//     if (knownLocation[1] === 0 || nums[knownLocation[1] - 1] !== target) {
//         min = knownLocation[1];
//     } else {
//         min = findLowest( knownLocation[0], knownLocation[1], nums, target);
//     }
//
//     if (knownLocation[1] === nums.length - 1 || nums[knownLocation[1] + 1] !== target) {
//         max = knownLocation[1];
//     } else {
//         max = findHighest( knownLocation[2], knownLocation[1], nums, target);
//     }
//
//     return [min, max];
//
//     function divideAndConquer(min, max, nums, target) {
//         while ( min <= max ) {
//             let middle = Math.floor(( min + max ) / 2);
//             let currentElement = nums[middle];
//
//             if (currentElement < target){
//                 min = middle + 1;
//             }
//             else if (currentElement > target) {
//                 max = middle - 1;
//             }
//             else {
//                 return [min, middle, max];
//             }
//         }
//
//         return [ -1, -1 ];
//     }
//
//     function findLowest( min, lowest, nums, target ) {
//         let endPoint = min;
//         let lowestMatch = lowest;
//
//         while (nums[lowestMatch] === target && nums[lowestMatch - 1] === target) {
//             let middle = Math.floor(( lowestMatch + endPoint ) / 2);
//             (nums[middle] < target) ? endPoint = middle : lowestMatch = middle;
//         }
//
//         return lowestMatch;
//     }
//
//     function findHighest( max, highest, nums, target ) {
//         let endPoint = max;
//         let highestMatch = highest;
//
//         while (nums[highestMatch] === target && nums[highestMatch + 1] === target) {
//             let middle = Math.ceil(( highestMatch + endPoint ) / 2);
//             (nums[middle] > target) ? endPoint = middle : highestMatch = middle;
//         }
//
//         return highestMatch;
//     }
//
//
// };

// Refactored and easier to read but no performance difference?
var searchRange = function(nums, target) {
    return [
        binarySearch(nums, target, true),
        binarySearch(nums, target, false)
    ];
};

function binarySearch(nums, target, isStart) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.trunc((left+right) / 2);

        if (nums[mid] === target) {
            if (isStart && nums[mid-1] === target) {
                right = mid - 1;
            } else if (!isStart && nums[mid+1] === target) {
                left = mid + 1;
            } else {
                return mid;
            }
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
