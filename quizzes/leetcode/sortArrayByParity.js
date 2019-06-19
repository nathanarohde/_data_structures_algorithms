// Run time complexity
// 76ms fastest 60ms top 8% of solutions
// Memory complexity
// 37MB smallest 36.6 MB top 34%
// var sortArrayByParity = function(arr) {
// let odds = [];
// let evens = [];
//
// for (let i = 0; i < A.length; i++){
//     if (A[i] % 2 === 1) {
//         evens.push(A[i]);
//     } else {
//         odds. push(A[i]);
//     }
// }
//
// return evens.concat(odds);
// }

// var sortArrayByParity = function(arr) {
//     return arr
//         .filter(v => v % 2 === 0)
//         .concat(arr.filter(v => v % 2 === 1));
// }
// filter same speed?  Memory less
