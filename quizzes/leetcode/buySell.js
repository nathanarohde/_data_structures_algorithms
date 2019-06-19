// Find the greatest negative difference between sequential variables

// Run time complexity
// 60ms fastest 44ms top 13% of solutions
// Memory complexity
// 35.5MB smallest 35 MB top 20%
// var maxProfit = function(prices) {
//     let lowest = prices[0];
//     let highest = 0;
//     let highestDifference = 0;
//
//     for (let i=0; i < prices.length; i++){
//       if (prices[i] < lowest) {
//         lowest = prices[i];
//         highest = prices[i];
//       }
//       if (prices[i] > highest) {
//         highest = prices[i];
//         if (highestDifference < (highest - lowest)){
//           highestDifference = highest - lowest;
//         }
//       }
//     }
//     return highestDifference;
// };

// Refactored highest variable not needed
var maxProfit = function(prices) {
    let lowest = prices[0];
    let highestDifference = 0;

    for (let i=0; i < prices.length; i++){
      if (prices[i] < lowest) {
        lowest = prices[i];
      }
      if (prices[i] - lowest > highestDifference) {
        highestDifference = prices[i] - lowest;
      }
    }
    return highestDifference;
};

maxProfit([7,1,5,3,6,4]);
