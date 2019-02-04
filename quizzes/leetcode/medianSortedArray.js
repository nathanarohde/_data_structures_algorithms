// Multiple pointers, on two different arrays solution.
// 1) Arrays are sorted
// 2) Length is unknown aside from only one can be empty.
// 3) Contents of arrays are unknown beyond the fact they are sorted - this means special strategies like divide and conquer are likely counter productive.
// Likely faster to set last and secondToLast everytime rather than asking if every cycle

// Top 3% in runtime
// Top 4% in memory
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length === 1 && nums2.length === 0){ return nums1[0]};
    if (nums2.length === 1 && nums1.length === 0){ return nums2[0]};
    let total = nums1.length + nums2.length;
    let left1 = 0;
    let left2 = 0;
    let secondToLast = 0;
    let last = 0;
    let counter = 0
    while(left1 < nums1.length && left2 < nums2.length && counter <=

    Math.floor(total/2)){
        if (nums1[left1] < nums2[left2]){
            secondToLast = last;
            last = nums1[left1];
            left1++;
        } else {
            secondToLast = last;
            last = nums2[left2];
            left2++;
        }
        counter++;
    }

    while(left1< nums1.length && counter <= Math.floor(total/2)){
        secondToLast = last;
        last = nums1[left1];
        left1++;
        counter++
    }

    while(left2< nums2.length && counter <= Math.floor(total/2)){
        secondToLast = last;
        last = nums2[left2];
        left2++;
        counter++
    }

    if( total % 2 === 0 ){
       return (secondToLast + last) / 2;
    } else {
       return last;
    }
};

console.log(findMedianSortedArrays([1,2],[3,4]));
